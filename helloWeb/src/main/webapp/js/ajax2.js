<<<<<<< HEAD
//ajax2.js

import {table} from './ajaxmodule.js';

//onclick  이벤트 등록<button onclick="addMember()">바로 적어도 되고
document.getElementById('addBtn').onclick = addMember;	//이렇게 해도 됨

function addMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get','../AddMemberServlet.html?mid='+mid+'&pass='+pass+'&name='+name+'&phone='+phone);
	xhtp.send();
	xhtp.onload = function(){
		console.log('1=',xhtp.responseText);
		//사용자가 입력한 값을 return코드가 ok이면 {vo:mid,pass,name,phone}
		//tr 생성하여 td도 생성 tbody id값이 list인 것에 추가해주기=>화면에 출력
		//return코드가 ng이면 alert을 사용하여 에러발생 경고창 띄우기 후 list 추가 금지
		let result = JSON.parse(xhtp.responseText);
		console.log('result=',result)
		if(result.retCode=="OK"){
			document.getElementById('list').innerHTML += table.makeTr(result.vo);
		}else{
			alert('다시 입력하세요');
		}
	} 
}

document.getElementById('modBtn').onclick = modMember;

function modMember(e){
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get','../ModMemberServlet.html?mid='+mid+'&pass='+pass+'&name='+name+'&phone='+phone);
	xhtp.send();
	xhtp.onload = function(){
		let result = JSON.parse(xhtp.responseText);
		//데이터 영역의 tr
		document.querySelectorAll('#list tr').forEach( tr => {
			console.log(result)
			if(tr.children[0].innerHTML == result.vo.mid){
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;			
			}
		})

	}
}
	


=======
// ajax2.js
import { table } from './ajaxModule.js';

// const xhtp = new XMLHttpRequest(); // 비동기방식으로 처리해주는 객체인 XMLHttpRequest를 생성
// open(메서드, url)에서 url에 경로 설정을 잘 해야함.


// onclick 이벤트 등록 <button onclick="addMember()">
// member = {name : "hong", age:20} => member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;


function modMember(){
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', `../ModMemberServ.do?mid=${mid}&pass=${pass}&name=${name}&phone=${phone}`)
	xhtp.send();
	xhtp.onload = function(){
		let result = JSON.parse(xhtp.responseText);
		console.log(result);
		let c = document.querySelectorAll('#list tr')
		c.forEach(tr => {
			if(tr.children[0].innerHTML == result.VO.mid){				
		       tr.children[1].innerHTML = result.VO.pass;
			   tr.children[2].innerHTML = result.VO.name;
			   tr.children[3].innerHTML = result.VO.phone;
			}
		})
	
	}
	
}


function addMember(e) {
	// input태그의 value를 가져온 변수를 선언함
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', `../AddMemberServ.html?mid=${mid}&pass=${pass}&name=${name}&phone=${phone}`)
	xhtp.send(); // 이 메서드가 있어야지 실제 실행이된다.
	xhtp.onload = function() {
		console.log(xhtp.responseText);
		// 등록시에 바로바로 출력된 결과가 html에서 보일 수 있도록!
		// 사용자 입력값 : reCode=OK => {vo : mid, pss, name, phone}
		// tr 생성해서 td도 만들어야함.. tbody의 아이디 값은 list.. 누적시켜서 화면 출력.
		// reCode = NG => alert('처리 중 에러')'
		
		let json = JSON.parse(xhtp.responseText);
			console.log(json);
		if(json.retCode == "OK"){
			console.log('등록확인')
			document.getElementById('list').innerHTML += table.makeTr(json.VO);
		/*	let tr = '<tr>'
			tr += `<td>${mid}</td>`
			tr += `<td>${pass}</td>`
			tr += `<td>${name}</td>`
			tr += `<td>${phone}</td>`
			tr += `</tr>`
			document.getElementById('list').innerHTML += tr;
			*/
		}else{
			alert('처리 중 에러');
		}
		//let tr = '<tr>';
		//json.forEach()
	}
}
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
