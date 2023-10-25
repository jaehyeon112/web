//object.js

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