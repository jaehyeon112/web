//array1.js

<<<<<<< HEAD
const arr1 = []
arr1.push(10);
arr1.push('ten');
arr1.push({name : "Hong",age : 20});
arr1.unshift(20);	//맨 앞에 추가

console.log('배열 갯수 : ',arr1.length);

arr1.length = 3;	//앞에서부터 갯수만큼 잘라서 가져옴(배열 크기 지정 가능)
for(let ary of arr1){
	console.log('1:',ary);
}
console.log('배열 갯수2 : ',arr1.length);arr1

arr1.length = 5;	//추가되었지만 값이 없기에 undefined로 정의됨
for(let ary of arr1){
	console.log('2:',ary);
}
console.log('배열 갯수3 : ',arr1.length);arr1

arr1.pop();		//뒤에서부터 하나씩 삭제	//shift는 앞에서부터 지워짐
for(let ary of arr1){
	console.log('3:',ary);
}

arr1.splice(1,0,30);	//추가 삭제 수정 가능함	//0을 쓰면 인덱스 1번에 30을 추가(여러개의 값을 넣을 수 있음)	//1을 쓰면 인덱스 1번값을 30으로 수정	//1을 쓰고 대체값을 안쓰면 삭제
for(let ary of arr1){
	console.log('4:',ary);
}
arr1.splice(4,1)
for(let ary of arr1){
	console.log('4:',ary);
}




=======
const arr1 =[]

//배열에 추가에는 unshift와 push가 있다.

//push : 맨 뒤에 붙이는거..
arr1.push(10) 					// 한 배열에 다른 종류의 타입을 담을 수 있음.
arr1.push('ten') 				// 한 배열에 다른 종류의 타입을 담을 수 있음.
arr1.push({name:"hong",age:20}) // 한 배열에 다른 종류의 타입을 담을 수 있음.

//unshift : 맨 앞에 붙이는거..
arr1.unshift(20);
//arr1.length = 5; // 자바스크립트에서는 length속성이 읽기전용이 아니라서 지정값을 할당가능. => 크기를 늘리고 줄이고 초기화 가능함.

//배열의 삭제에는 shift와 pop이 있다.

//shift : 맨 앞에 삭제하는거..
arr1.shift(); // 항상 arr1[0]을 삭제함.
arr1.pop(); // 항상 arr1의 마지막 인덱스를 삭제함.


//=======================================================================================================================
//=======================================================================================================================

//splice : 추가, 삭제, 수정이 가능한 메서드
arr1.splice(1, 0, 30);	     // 추가 : arr1[1]의 위치에 0개의 갯수만큼 '30'이라는 값을 대체하겠다는 의미 
// arr1.splice(1, 1, 30);	 // 수정 : arr1[1]의 위치에 1개의 갯수만큼 '30'이라는 값을 대체하겠다는 의미 
// arr1.splice(1, 1);	 	 // 삭제 : arr1[1]의 위치에 1개의 갯수만큼 삭제하겠다는 의미 

console.log('크기: ',arr1.length);

for(let ary of arr1){   // for~of는 <<배열>>의 element를 하나하나 돌며 출력할 수 있음.
	console.log(ary)
}
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git

