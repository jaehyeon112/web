//페이지가 로딩되면서 바로 실행
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
	if (id != null && name != null && pass != null && major != null && birth != null) {
		//fetch(`../AddStudentServlet.do?id=${id}&name=${name}&pass=${pass}&major=${major}&birth=${birth}`)  => get방식
		// get방식은 url패턴, 값의제한
		// post방식 파라미터 볼수 없음. http 몸체에 값을 저장, 넣는값 무제한, content-type지정해야함.
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
			}).catch(err => console.log('err =>' + err))
	} else {
		alert('빈칸이 존재합니다.')
	}
}



function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid',obj.studentId);
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

	fetch(`../getStudent.do?id=${id}`).then(resolve => resolve.json()).then(result => {
		console.log(result)
		modal.querySelector('h2').innerHTML = result.studentId;
		modal.querySelector('input[name=pass]').value = result.studentPassword;
		modal.querySelector('input[name=name]').value = result.studentName;
		modal.querySelector('input[name=birth]').value = result.studentBirthday;
	})
	
	
		bt.addEventListener('click', edit)
		function edit(e) {
			let id = modal.querySelector('h2').innerHTML
			let pass = document.querySelector('input[name=pass]').value;
			let name = document.querySelector('input[name=name]').value;
			let birth = document.querySelector('input[name=birth]').value;
			fetch(`../editStudent.do`, {
				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `id=${id}&pass=${pass}&name=${name}&birth=${birth}`
			})
				.then(resolve => resolve.json()).then(result => {
					if(result.retCode == "OK"){
					alert('성공!')						
					console.log(result)
					targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + "]");
					let newTr = makeTr(result.vo);
					let parentElem = document.querySelector('#list');
					parentElem.replaceChild(newTr, targetTr);
					document.getElementById('myModal').style.display = 'none'
					}else{
						alert('실패!')
					}
				})
		}

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

