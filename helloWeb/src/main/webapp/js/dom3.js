import table from './domTable.js'
// dom3.js
// table>(thead>tr>th*5)+(tbody>tr>td*5)와 같은 형식으로 만들것.

//공공 데이터 포털 사이트에서 가져온 코로나 예방접종 할수있는 곳에 대한 정보.
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=JxjILV8BuO4zKqeFYbrkNXtGp2oJzpGCXS5En2AgAaJfx2%2F3cFgZqBDu3v1%2F002AqHYVarFqTcZ2J8tdWJyizQ%3D%3D'

// 테이블의 thead부분의 데이터.
let title = ['센터id', '센터명', '의료원', '연락처', '위도', '경도']

// 이거 공부 좀 하자.. fetch => 프로미스의 래퍼 같은 느낌으로 프로미스의 결과값을 반환함.
fetch(url).then(resolve => resolve.json())
	.then(fetchCallback) // 성공하면 fullfilled => then에 정의되어있는 메소드에 기능을 실행한다.
	.catch(err => console.log('error=>', err))

//fetch 호출되는 함수 callback함수 : result는 resolve의 값을 리턴받음. 왜냐? then으로 넘어온 데이터니까...
function fetchCallback(result) {

	//result로 들어온 값은 fetch의 resolve의 json타입을 변환한 객체 값이 들어온다.
	// 그 값의 data 속성에는 배열안의 객체 = [{key : value , key: value},{...}] 의 형식으로 값이 키와 밸류 형식으로 저장되어 있다. 
	let rawData = result.data;

	// optAry에 sido 정보를 중복된 값은 제거한 값을 담을 배열임.
	let sidoAry = [];

	//이 데이터의 sido의 중복된 값을 제거한뒤  sidoAry에 푸쉬로 넣음..
	rawData.forEach(ele => {
		if (sidoAry.indexOf(ele.sido) == -1) {
			sidoAry.push(ele.sido);
		}
	})

	//set으로 하게 되면 객체가 되버리는듯?
	//sidoAry = new Set(sidoAry);

	// select 태그의 id값을 sidosel에 담았었음. 즉, sidosel == html의 특정 select 태그
	let sidosel = document.querySelector('#sidolist')

	// 중복된 값이 제거된 sidoAry의 값을 for문으로 돌며 option태그와 그 내용을 태그 안에 넣은 뒤 select의 append로 자식태그로 만들어버림
	sidoAry.forEach(ele => {
		let option = document.createElement('option')
		option.innerHTML = ele;
		sidosel.append(option)
	})
	// 옵션을 바꾸면 테이블이 선택된것들만 나타나게 하기 위해...
	// select 태그에 change이벤트 발생.. change가 됐을때, 함수를 호출시킴. 만약 change를 안하면 호출안됨.
	sidosel.addEventListener('change', changeCallBack)

	// 여기서 e는 해당 event로 여러가지 속성이 있으며 그 중 target을 하게 되면 <select><option></option></select> 와 같이 뜸..
	function changeCallBack(e) {
		// e.target.value를 통해 내가 선택한 값을 가져올 수 있음.
		let searchSido = e.target.value;

		// 가져온 데이터(rawData)는 json타입의 객체 [{},{}] 이므로 필터를 써서 검색한값과 원래 데이터의 sido값을 일치한 것만 filterAry에 담음
		let filterAry = rawData.filter(ele => ele.sido == searchSido);
		// 필터로 걸러진 값으로 table을 만든다.
		genTable(filterAry)
	}

	// 선택하지 않아도 처음 화면을 보여주기 위해 만듦.
	// filter로 index 5번까지만 보여줄 수 있게
	let filterAry = rawData.filter((ele, index) => index < 5)
	genTable(filterAry)
}// end fetchCallBack함수


//테이블을 만드는 함수
function genTable(rawData = [], page = 1) {
	// 초기화해서 점점 누적이 안되게 함.
	document.querySelector('#show').innerHTML = '';
	
	// thead를 만들기 위해..
	let thead = table.makeHead(title) // 헤더 정보
	
	// reduce를 이용하여 나중에 필터로 거를 수 있게 하려고 함....
	// makeBody에 들어갈 값인데 [{},{}]형식으로 매개변수를 넣어야 한다. 
	let mapData = rawData.reduce((acc, center) => { //매핑 정보 출력시킴 
		//내가 가져오고 싶은 데이터만 출력하기 위해 reduce가 돌아갈때, 각각의 객체를 만들고 있음.
		let newData = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		acc.push(newData);
		return acc;
	}, []);
	
	// tbody 만듦
	let tbody = table.makeBody(mapData); // [{},{},{},...{}]
	
	
	let table1 = document.createElement('table');
	table1.setAttribute('border', '1')
	table1.append(thead)
	table1.append(tbody)
	document.querySelector('#show').append(table1)

	// tr 클릭 이벤트 등록
	// 모든 querySelectorAll을 할때, thead>tr은 빼고 가져와야해서 tbody>tr로 함
	let targetTr = document.querySelectorAll('tbody>tr')
	// querySelectorAll 일때 forEach가능
	targetTr.forEach(tr => {
		// 각각의 element(tr)가 addEventListner를 통해 클릭 이벤트를 가지게 됨.
		tr.addEventListener('click', function(e) {
			// tr.childern은 td를 의미하는데, index[4] = 위도, index[5] = 경도를 의미함.
			let lat = tr.children[4].innerHTML;
			let lng = tr.children[5].innerHTML;
			
			// lodcation.href = 현재 url의 값을 의미함.
			console.log(location.href)
			
			
			// get방식으로 파라미터값을 넘기려고 하는듯??
			// helloWeb/js/daumapi.html?x=?&y=? 와 같은 주소로 서버에 요청하게 됨.
			open(`daumapi.html?x=${lat}&y=${lng}`)
		})

	})

}