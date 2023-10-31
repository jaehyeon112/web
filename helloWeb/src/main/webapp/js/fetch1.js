//fetch1.js
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
