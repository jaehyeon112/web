//object.js
<<<<<<< HEAD
console.log('object start');

let obj1 = {
	name : 'Hong',
	age : 20 
};

let obj2 = obj1;	//주소값을 참조
//console.log(obj1);

obj2.age = 22;
console.log(obj2);
console.log(obj1);	//바뀐 결과값이 1에서도 바뀜

//복사
let obj3 = {...obj1};	//펼침연산자로 안의 값을 복사해옴
obj3.age = 23;
console.log(obj1);	//1의 값은 바뀌지 않음
console.log(obj3);

//클래스
class Member {
	constructor(name,age,height){
		this.name = name;	//this로 선언하면 클래스 안에 필드가 됨
		this.age = age;
		this.height = height;
	}
	setWeight(weight){
		this.weight = weight;
	}
	getWeight(){
		return this.weight;
	}
	showInfo(){
		return `이름 : ${this.name}, 나이 : ${this.age}세`;
	}
	// 학생의 정보 : 학생번호, 학생이름, 영어점수, 수학점수
	makeTr(student={sno,sname,engScore,mathScore}){
		let str = '';
		str += '<tr>',
		str += '<td>'+student.sno+'</td>';
		str += '<td>'+student.sname+'</td>';
		str += '<td>'+student.engScore+'</td>';
		str += '<td>'+student.mathScore+'</td>';
		str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		str += '</tr>'
		return str;
	}
	makeHtml(studentAry=[]){
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
		this.html = str;
		}
	showPage(dom){
		dom.innerHTML = this.html;
	}
}

const mem1 = new Member('홍길동',20,187.4);
console.log(mem1.showInfo());
mem1.setWeight(62.1);
console.log('홍길동의 몸무게는 ',mem1.getWeight(),'입니다');
=======

console.log('object start...');

let obj1 = {
	name: 'hong',
	age: 20
}

//주소 참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

//복사
let obj3 = {
	...obj1
}; //...은 펼침연산자임 obj1의 값을 펼쳐서 새로 저장하겠다는 의미
obj3.age = 24;
console.log(obj1);

// 클래스.
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}

	getWeight() {
		return this.weight
	}

	showInfo() {
		return `이름 : ${this.name}, 나이는 ${this.age} 입니다.`
	}
	// 학생의 정보: 학생번호, 이름, 영어,수학 항목을 가지고 있는 학생정보를 넣으면
	makeTr(student = {
		sno,
		sname,
		eng,
		math
	}) {
		// tr > td 4개 돌아 반환하는..
		console.log(this)
		let tb = `<tr>`
		tb += `<td>${student.sno}</td> `
		tb += `<td>${student.sname}</td>`
		tb += `<td>${student.eng}</td>`
		tb += `<td>${student.math}</td>`
		tb += `</tr>`
		return tb;
	}

	makeHtml(studAry = []) {
		//table
		console.log("ddd")
		let table1 = `<table><tbody>`
		// let obj = this; // 이런식으로 this를 참조받아서 윈도우객체 대신에 obj.makeTr을 사용가능
		// studAry.forEach(function(ele) {
		// 	table1 += this.makeTr(ele); 
		// });  // 익명함수 안에서의 this 는 윈도우 객체를 의미하므로 계속 없다고 에러뜸;;;

		studAry.forEach(obj => table1 += this.makeTr(obj));

		table1 += `</tbody></table>`
		this.html = table1;
		console.log(table1);
	}
	showPage(dom) {
		dom.innerHTML = this.html;
	}
}



// const mem1 = new Member('개똥', 50, 150)
// console.log(mem1.showInfo())
// mem1.setWeight(300);
// console.log(`몸무게는 ${mem1.getWeight()}`);
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
