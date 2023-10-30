//ajax1.js
// Asynchronous Javascript And XML
// 비동기 vs 동기

import { table } from './ajaxModule.js';


//동기 = > 순차적으로 진행되는것 [홍길동,김길동,최길동]
/*let friend = [];
friend.push('홍길동');
friend.push('김길동');
friend.push('최길동');
console.log(friend)
*/

//비동기 => 작업을 병렬로 나열하여 속도를 높일 수 있다... [김길동,홍길동,최길동]


let friends = [];
setTimeout(function() {
	friends.push('홍길동')
}, 1000)

setTimeout(function() {
	friends.push('김길동')
}, 500)

setTimeout(function() {
	friends.push('최길동')
}, 2000)


//XML 데이터 사용하는 방법
let xhtp = new XMLHttpRequest();
xhtp.open('GET', '../MemberListServ2');
xhtp.send();
xhtp.onload = loadJson; //이벤트 관련속성에 실행하라는 의미? XML은 불러오는게 .children 어쩌구 저쩌구 해야해서 너무 귀찮아서 잘 안쓰고 json을 많이씀


function loadJson(){
	// memberlistserv2로 가져온 데이터가 json타입의 문자열이었음.
	console.log(xhtp.responseText);
	//그래서 parse해주고...
	let result = JSON.parse(xhtp.responseText);
	// result는 배열타입이 되어버림.
	let titles = ['회원번호', '비밀번호', '이름', '연락처'];
	let dataAry = [];
	result.forEach(member => {
		dataAry.push({ mid: member.mid, pass: member.pass, name: member.name, phone: member.phone })
	})
	console.log(result);
	
	//↓이건 이미 만들어논 함수인 테이블 이용한것
	//let result2 = table.makeTable(titles,result);
	
	result = table.makeTable(titles, dataAry);
	document.getElementById("show").innerHTML = result
}



function loadXML() {
	console.log(xhtp.responseXML)
	let doc = xhtp.responseXML;
	console.log(doc)
	let records = doc.getElementsByTagName('record')
	console.log(records); // 배열처럼 보여짐...그러나 forEach는 못쓴다.
	let dataAry = [];
	for (let record of records) {
		let obj = {
			mid: record.children[0].textContent, // mid.
			pass: record.children[1].textContent, // pass
			name: record.children[2].textContent, // name;
			phone: record.children[3].textContent // phone
		}
		dataAry.push(obj);
	}
	let titles = ['회원번호', '비밀번호', '이름', '연락처'];
	let result = table.makeTable(titles, dataAry);
	document.getElementById("show").innerHTML = result;

	let newMember
		= { mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999" }
	let tr = "<tr><td>" + newMember.mid + "</td>" + "<td>" + newMember.pass + "</td>" + "<td>" + newMember.name + "</td>" + "<td>" + newMember.phone + "</td></tr>"
	document.getElementById('list').innerHTML += tr;
}//end onload



