//페이지가 로딩되면서 바로 실행

import svc from './service.js'

// 비동기방식코드를 순차적으로 가독성 높이는 방법. async, await.
//async 함수(
//  await 처리 (반환되는 타입이 promise 객체여야함.) 
//  await 처리
//  await 처리

/*

async function studentList() {
	//처리가 다 끝나면 요청 정보에 값을 담아라는 의미로 await
	let req = await fetch('../studentList.do');
	let json = await req.json(); // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
	let tbody = document.querySelector('#list');
	try {
		json.forEach(student => {
			tbody.append(makeTr(student));
		})
	} catch (err) { console.log('err =>', err) }
}

*/

/*

fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	})
	.catch(err => console.log('error : ', err))

*/

svc.studentList(
	// 성공시 가지고올 함수
	result => {
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	},
	// 실패시 가지고올 함수
	err => console.log('error : ', err));

let addBnt = document.querySelector("#addButton")

addBnt.addEventListener('click', add);

function add(e) {
	let id = document.querySelector("#userId").value;
	let name = document.querySelector("#userName").value;
	let pass = document.querySelector("#userPass").value;
	let major = document.querySelector("#major").value;
	let birth = document.querySelector("#userBirth").value;
	let para = `id=${id}&name=${name}&pass=${pass}&major=${major}&birth=${birth}`
	console.log(para)
	//fetch(`../AddStudentServlet.do?id=${id}&name=${name}&pass=${pass}&major=${major}&birth=${birth}`)  => get방식
	// get방식은 url패턴, 값의제한
	// post방식 파라미터 볼수 없음. http 몸체에 값을 저장, 넣는값 무제한, content-type지정해야함.

	let optObj = {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `id=${id}&name=${name}&pass=${pass}&major=${major}&birth=${birth}`
	}
	// post방식
	svc.addStudent(optObj, result => {
		// 성공시 				
		if (result.retCode == 'OK') {
			let tr = makeTr({ studentId: id, studentName: name, studentBirthday: birth });
			alert('성공!')
			document.querySelector('#list').append(tr);
		} else {
			alert('실패!')
			console.log(result)
		}
	},
		// 실패시	
		err => console.log('err =>' + err))
}


/*	
	fetch('../AddStudentServlet.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `id=${id}&name=${name}&pass=${pass}&major=${major}&birth=${birth}`
	})
		.then(resolve => resolve.json()).then(result => {
			console.log(result)
			if (result.retCode == 'OK') {
				let tr = makeTr({ studentId: id, studentName: name, studentBirthday: birth });
				alert('성공!')
				document.querySelector('#list').append(tr);
			} else {
				alert('실패!')
				console.log(result)
			}
		}).catch(err => console.log('err =>' + err))}

*/

function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제버튼 만들기
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.addEventListener('click', function(e) {
		//ajax호출=>서블릿을 실행하겠다는 의미

		svc.removeStudent(obj.studentId, result => {
			if (result.retCode == 'OK') {
				alert('삭제 성공!');
				tr.remove();
			} else {
				alert('삭제 실패');
			}
		},
			err => console.log('error: ', err))



		/*
					fetch('../delStudent.do?sid=' + obj.studentId)
						.then(resolve => resolve.json())
						.then(result => {
							if (result.retCode == 'OK') {
								alert('삭제 성공!');
								tr.remove();
							} else {
								alert('삭제 실패');
							}
						})
						.catch(err => console.log('error: ', err));
		*/


	})
	btn.innerHTML = "삭제";
	td.append(btn);
	tr.append(td);
	return tr;
}// end of makeTr(I)

//모달보여주기
function showModal(e) {
	console.log(e.target.parentElement, this)
	console.log("이건 뭘까", e.target.parentElement)
	let id = this.children[0].innerHTML;

	console.log(id)

	let bt = document.querySelector('#edit')

	// Get the modal
	var modal = document.getElementById("myModal");
	modal.style.display = "block";

	svc.getStudent(id, result => {
		console.log(result)
		modal.querySelector('h2').innerHTML = result.studentId;
		modal.querySelector('input[name=sid]').value = result.studentId;
		modal.querySelector('input[name=pass]').value = result.studentPassword;
		modal.querySelector('input[name=name]').value = result.studentName;
		modal.querySelector('input[name=birth]').value = result.studentBirthday;
	},
		err => console.log(err)
	)

	/*fetch(`../getStudent.do?id=${id}`).then(resolve => resolve.json()).then(result => {
		console.log(result)
		modal.querySelector('h2').innerHTML = result.studentId;
		modal.querySelector('input[name=sid]').value = result.studentId;
		modal.querySelector('input[name=pass]').value = result.studentPassword;
		modal.querySelector('input[name=name]').value = result.studentName;
		modal.querySelector('input[name=birth]').value = result.studentBirthday;
	}).catch(err=>console.log(err))*/


	bt.addEventListener('click', edit)
	function edit(e) {
		let id = modal.querySelector('input[name=sid]').value;
		let pass = document.querySelector('input[name=pass]').value;
		let name = document.querySelector('input[name=name]').value;
		let birth = document.querySelector('input[name=birth]').value;

		svc.editStudent({
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `id=${id}&pass=${pass}&name=${name}&birth=${birth}`
		},
			result => {
				if (result.retCode == "OK") {
					alert('성공!')
					console.log(result)
					let newTr = makeTr(result.vo);
					let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + "]");
					let parentElem = document.querySelector('#list');
					parentElem.replaceChild(newTr, targetTr);
					document.getElementById('myModal').style.display = 'none'
				} else { alert('실패!') }
			},
			err => console.log(err))

		/*	
					fetch(`../editStudent.do`, {
						method: 'post',
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
						body: `id=${id}&pass=${pass}&name=${name}&birth=${birth}`
					})
						.then(resolve => resolve.json()).then(result => {
							if (result.retCode == "OK") {
								alert('성공!')
								console.log(result)
								let newTr = makeTr(result.vo);
								let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + "]");
								let parentElem = document.querySelector('#list');
								parentElem.replaceChild(newTr, targetTr);
								document.getElementById('myModal').style.display = 'none'
							} else {
								alert('실패!')
							}}).catch(err=>console.log(err))}
		*/

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	}
}

