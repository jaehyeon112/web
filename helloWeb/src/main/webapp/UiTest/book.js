//book.js

// XMLHttpRequest 객체 생성
let xhtp = new XMLHttpRequest();

// open(메서드, url) url의 경로를 잘 맞춰야함. url을 bookListServlet으로 하였음
xhtp.open('GET', '../BookListServlet');
// 실행
xhtp.send();
// xhtp가 로드되면 loadJson함수를 실행시킴.
xhtp.onload = loadJson;

//익명함수로 사용하지 않고 함수를 만들어 사용함.
function loadJson() {
	// result에 JSON 타입을 객체로 변환
	let result = JSON.parse(xhtp.responseText);
	let title = [`<input type="checkbox">`,"도서코드", "도서명", "저자", "출판사", "가격", "삭제"];
	let result2 = table.makeTable(title,result);
	// makeTalbe 함수에 리턴 받은 것을 id가 show인 태그에 innerHTML을 붙여넣음.
	document.getElementById("show").innerHTML = result2;
	}


	const table = {
		makeHead(title = [`<input type="checkbox">`,"도서코드", "도서명", "저자", "출판사", "가격", "삭제"]) {
			let headTag = `<thead style="background-color:#ccc"><tr>`;
			title.forEach(ele => {
				headTag += "<th>" + ele + "</th>";
			})
			headTag += "</tr></thead>";
			return headTag;
		},
		// body의 매게변수로 배열안의 객체를 사용하기 위해 forEach를 사용.
		makeBody(dataAry = [{ book_code, book_title, book_author, book_press, book_price }]) {
			let bodyTag = "<tbody id='list'>";
			dataAry.forEach(item => {
				//객체를 매게 변수로 받는 makeTr을 사용하기 위해 forEach..
				bodyTag += this.makeTr(item);
			})
			bodyTag += "</tbody>";
			return bodyTag;
		},

		makeTable(titleAry, dataAry) {
			let tableTag = "<table border='1'>";
			tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
			tableTag += "</table>";
			return tableTag;
		},
		//객체를 매게 변수로 받음.
		makeTr(member={}){
			let trTag = `<tr>`
			// 그림에 checkBox 있길래 추가함..
			trTag += `<td><input type="checkbox"></td>`
			for(let prop in member){
				trTag += `<td>${member[prop]}</td>`;
			}
			// 그림에 button 삭제 있길래 추가함..
				trTag += `<td><button>삭제</button>`
			trTag += `</tr>`
			return trTag;
		}

	}