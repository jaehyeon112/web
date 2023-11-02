<<<<<<< HEAD
//object5.js : 객체 복사

const obj1 = {
	name : 'Hong',
	age : 20,
	weight : 66.6
	//다른 방식으로 bloodtype 객체 선언
}
console.log(obj1)
const obj2 = Object.assign({name:"kim",age:22, height:123.4},obj1);	//obj2에 obj1의 값을 그대로 담아줌(참조)	//값을 넣어줘도 1이 그대로 나오지만 새로운 속성이 들어가면 추가시켜줌

console.log(obj2);

const obj3 = obj1;
obj3.name='seo'

console.log(obj3);
console.log(obj1);

//상속
const obj4 = Object.create(obj1);	//처음에는 1의 값을 참조
obj1.name = "hwang"
console.log(obj4);
console.log(obj4.name);
//상속을 통해서 자식 객체를 생성하면 자식값이 바뀌기 전에는 부모값을 그대로 가지고 변경되면 자식 고유의 값을 가지게 됨
obj4.name="Kim";		//값을 변경 시 부모와는 다른 값을 가지게 됨(유지)
console.log(obj4.name);

//객체의 속성을 정의하는 방법. 객체의 속성기술자
//obj1.bloodtype = "O형"
Object.defineProperty(obj1,'bloodType',{
	set:function(bt){
		if(bt == "A"|| bt == "B"||bt=="O"||bt=="AB"){
			this._bloodType = bt;
		}else{
			console.log('잘못된 유형입니다');
		}
	},
	get:function(){
		return this._bloodType;
	}
})
obj1.bloodType="O"	//setter로 값 지정
console.log(obj1.name,'의 혈액형 : ',obj1.bloodType)		//getter로 값 가져오기

//속성정의 시 속성값과 this객체의 속성을 달리하는 이유는?
//객체의 속성 정의 시 get, set을 어디서 확인하는지?
=======
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
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
