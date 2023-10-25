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