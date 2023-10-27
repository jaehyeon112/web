//string1.js

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