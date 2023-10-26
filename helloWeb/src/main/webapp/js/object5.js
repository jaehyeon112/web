// object5.js : 객체

const obj1 = {
	name: "Hong",
	age: 20,
	weight: 66.8
	// bloodType : 'A'
}

// 객체 assign 메서드 : 새로운 객체를 만들어주는 메서드
const obj2 = Object.assign( {} , obj1 ); // 참조가 아닌 새로운 객체를 만드는 개념임. 
const obj3 = Object.assign( {name: "Hwang", age: 22 , height: 123.4} , obj1 ); // 만약 안에 같은 속성이 있으면 덮어씌워서 처리하고 없는 속성이면 누적되서 처리함. 

// 객체 create 메서드 : 새로운 객체를 만들어주는 메서드 (상속의 개념) 부모의 속성이 바뀌면 자식의 속성도 바뀐다는 의미, 자식요소의 값이 달라지면 부모의 값을 참조하지 않고 자식의 고유한 값으로 유지함.
// 자바에서는 자식은 부모의 값을 참조하는 형태가 아니지만 자바스크립트에서는 그렇다..
const obj4 = Object.create(obj1)
obj1.age = 22;
console.log(obj4.age);

//객체의 속성을 정의하는 법 . 객체의 속성기술자를 활용
// obj1.bloodType = 'A'; => 이러면 C형 D형 같은 없는 혈액형도 들어갈 수 있게 됨.

// Object 정적클래스의 defineProperty를 이용하면 속성에 해당하는 값만 들어가게 할 수 있음.
Object.defineProperty(obj1, 'bloodType', {
	set: function(bt){
		if (bt == "A" || bt == "B" || bt == "AB" || bt == "O" ){
			this._bloodType = bt;
		}else {
			console.log('잘못된 값 입니다.');
		}
	},
	get: function(){
		return this._bloodType;
	}
})


obj1.bloodType = "A"; // set
console.log(obj1.bloodType); //get


// 