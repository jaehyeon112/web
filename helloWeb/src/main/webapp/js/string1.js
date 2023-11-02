//string1.js

<<<<<<< HEAD
let str1 = "Hello"; //기본 데이터 타입(문자열 자체)
let str2 = new String("Hello");	//객체타입

console.log(typeof str1, typeof str2)
console.log(str1 == str2);	//두개의 값만 비교
console.log(str1 === str2);	//두개의 타입 비교(값과 변수의 유형까지 비교)

console.log(str1.toUpperCase());

let result = "   공백 제거 합니다.   ".trim();
console.log(result,'문자 길이 : ',result.length)

//알고 있어야 하는 함수
//replace(),split(),slice(),substr(),subString()
//toString(),indexOf(),lastIndexOf(),charAt(),includes()
//concat()

result = "Hello, World, Nice, World".replace(',','!');		//,의 첫번째 값을 찾아 ! 값으로 바꿔줌(나머지는 안 바꿔줌)
console.log('1:',result);

result = "Hello, World, Nice, World".replace(/,/g,'!');	//,이라는 값을 모두 찾아 !로 바꿈(/찾을값/gi,바꿀값)
console.log('2',result);

result = "Hello World Nice World".replace(/\s/g,'~');	//공백을 찾아서 ~으로 바꿔줌
console.log('3',result);
=======
let str1 = "Hello"; // 기본데이터타입.
let str2 = new String("Hello")// String 표준 전역 객체

console.log(typeof str1, typeof str2)
console.log(str1 == str2) // 값만 비교함 => true
console.log(str1 === str2) // 값&타입을 비교함 => false

console.log(str1.toUpperCase()) // 문자열이지만 객체처럼 자동으로 타입변환이 되어 굳이 구분하고 쓰지 않아도 됨.

// trim(), trimStart(), trimEnd()
// replace(), split(), slice(), substring(), substr()
// toString(), inexOf(), lastIndexOf(), charAt(), includes()
// concat()


let str = "asdfg qwert"
console.log(str.search('y'))
console.log(str.indexOf('y'))
console.log(str.slice(30),"asdasdf");
// 객체의 종류
// []: 배열
// {}: 객체
// /값/ : 정규표현식 객체
<h1>
</h1>
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
