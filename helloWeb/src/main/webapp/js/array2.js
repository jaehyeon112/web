// array2.js : MOCK_DATA.json 파일의 데이터 활용

const json =`
[{"id":1,"first_name":"Hughie","email":"hbingell0@tumblr.com"},
{"id":2,"first_name":"Nicol","email":"nhucker1@timesonline.co.uk"},
{"id":3,"first_name":"Becky","email":"bschneidar2@bloglines.com"},
{"id":4,"first_name":"Barrett","email":"bferrini3@ted.com"},
{"id":5,"first_name":"Glynn","email":"gfacer4@ehow.com"},
{"id":6,"first_name":"Nelia","email":"nchalcroft5@jugem.jp"},
{"id":7,"first_name":"Alis","email":"adionisetto6@cnbc.com"},
{"id":8,"first_name":"Row","email":"ritzkovich7@businessweek.com"},
{"id":9,"first_name":"Yolane","email":"ylively8@t-online.de"},
{"id":10,"first_name":"Wiatt","email":"wgreystock9@forbes.com"}]
`
//json타입을 -> 자바스크립트의 object로 바꾸는 방법 : JSON.parse();

let members = JSON.parse(json);
console.log(json) // 이건 문자열타입으로 콘솔창에 출력됨.

let delMember = "Glynn"; // 5번째 Glynn을 지우고 싶을때
let yourinfo = { name: "Kim" , email: "amikjh@naver.com"}

let name = prompt("이름과 이메일을 입력하세요. 예) 홍길동, hong@gmail.com");

let a = name.replace(/\s/g,'').split(',')

members.forEach(function(ele,index){
	if(ele.first_name == delMember){
		members.splice(index,1,{id: ele.id, first_name: yourinfo.name, email: yourinfo.email});
	}
})

members.splice(members.length,0,{id:members.length+1 , first_name: a[0], email:a[1]})

console.log(members) // 이건 배열안의 객체 형식으로 출력됨.


const deepArr = [["라이언",4],["어피치",3],["콘",2],["무지",4]]

console.table(deepArr)


