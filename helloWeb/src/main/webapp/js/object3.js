<<<<<<< HEAD
//object3
//가장 추천하는 방식

const member = {
	name : "홍길동",
	age : 20,
	height : 123.4,
	showInfo:function(){
		return `이름 : ${this.name}, 나이 : ${this.age}세`;
	},
	html:'',
	makeTr : function(student={sno,sname,engScore,mathScore}){
		let str = '';
		str += '<tr>';
		str += '<td>'+student.sno+'</td>';
		str += '<td>'+student.sname+'</td>';
		str += '<td>'+student.engScore+'</td>';
		str += '<td>'+student.mathScore+'</td>';
		str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		str += '</tr>'
		return str;
	},
	makeHtml(studentAry){
		let str = '';
		let obj = this;
		str += '<table border ="1">';
		str += '<tbody>';
		str += '<tr><th>학번</th><th>이름</th><th>영어점수</th><th>수학점수</th></tr>';
		studentAry.forEach(function(stud){
			str += obj.makeTr(stud);
		});
		//str += studentAry.reduce((acc,stud)=>acc+obj.makeTr(stud),'');
		str += '</tbody>';
		str += '</table>';
		this.html = str;		//여기서 this는 member을 의미
	},
	showPage(dom){
		dom.innerHTML = this.html;
	}
}

//객체의 속성을 보기 위함 => for..in
for(let prop in member){
	//member가 가진 특정 속성 => member.name or member['age']
	console.log(prop);
	if((typeof member[prop]) != 'function'){
		console.log(member[prop])
	}
}

const students = [
	{sno:'001',sname:"최해주",engScore:80,mathScore:85},
	{sno:'002',sname:"김채민",engScore:82,mathScore:83},
	{sno:'003',sname:"최다예",engScore:84,mathScore:88},
	{sno:'004',sname:"김일번",engScore:68,mathScore:76},
	{sno:'005',sname:"양이번",engScore:74,mathScore:35},
	{sno:'006',sname:"최삼번",engScore:99,mathScore:64}
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));
=======
const member = {
	name: "홍길동",
	age: 20,
	height: 123.4,
	showInfo: function() {
		return `이름은 ${this.name}, 나이는 ${this.age}, 키는 ${this.height} 입니다.`
	},

	makeTr: function(student = { sno, sname, eng, math }) {
		let tb = `<tr>`
		for (let prop in student) {
			tb += `<td>${student[prop]}</td>`
		}
		tb += `<td><button onclick="this.parentElement.parentElement.remove()">x</button></td>`
		tb += `</tr>`
		return tb;
	},

	makeHtml(studAry) {
		let table1 = `<table border="1"><tbody>`
		studAry.forEach(obj => table1 += this.makeTr(obj));
		table1 += `</tbody></table>`
		this.html = table1;
	},
	showPage(dom) {
		dom.innerHTML = this.html;
	}
}


// 객체의 속성. for ...in
for (let prop in member) {
	//member.name / mamber['age'] 이런식으로 가져오는것..
	if (typeof member[prop] != 'function') {
		console.log(member[prop])
	}
}


const students = [
	{ sno: '001', sname: "최해주", eng: 80, math: 85 },
	{ sno: '002', sname: "김채민", eng: 82, math: 83 },
	{ sno: '003', sname: "최다예", eng: 84, math: 88 }
]

member.makeHtml(students)
member.showPage(document.getElementById('show'))
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
