//fetch1.js
<<<<<<< HEAD

import { table } from './ajaxmodule.js';

fetch('../MemberListServlet2')
	.then((resolve) => {
		console.log('resolve : ', resolve);
		return resolve.json();	//json문자열을 자바스크립트 객체 타입으로 변환시켜주는 함수(.json()) JSON.parse와 같은 기능
	})
	.then((result) => {
		console.log('result  :', result)	//이 값을 가지고 데이터를 받아와 페이지를 만들 수 있음
		let titles = ["회원번호", "비번", "이름", "연락처"];
		let dataAry = result;
		result = table.makeTable(titles, 
		dataAry);
		document.getElementById('show').innerHTML = result;
	})
	.catch((err) => {
		console.log('error : ', err)
	})
=======
// table 객체값을 import
import { table } from './ajaxModule.js';

//url에 넘어온 값을 promise 객체로 넘겨주겠다는 의미
//open() send() 이런거 없이 바로 사용가능..
fetch('../MemberListServ2').then(resolve => {
	console.log(resolve);
	// json문자열을 .json()을 통해 객체로 변환시킨 것을 return
	return resolve.json();
	// 여기 있는 result의 값으로 페이지를 만든다...
}).then(result => {
	console.log(result)
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = result;

	result = table.makeTable(titles, dataAry);
	document.getElementById("show").innerHTML = result;
}).catch(err => console.log(err))
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
