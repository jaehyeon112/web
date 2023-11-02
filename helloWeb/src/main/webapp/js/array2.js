<<<<<<< HEAD
//array2.js : Mock_DATA.json 파일의 데이터 활용(mokaroo)

const json = `
[{"id":1,"first_name":"Abra","email":"aferry0@fotki.com"},
{"id":2,"first_name":"Renault","email":"rkollasch1@businesswire.com"},
{"id":3,"first_name":"Nessi","email":"nlivingstone2@sbwire.com"},
{"id":4,"first_name":"Maggie","email":"marnaudi3@is.gd"},
{"id":5,"first_name":"Ginnifer","email":"gstandingford4@dailymotion.com"},
{"id":6,"first_name":"Margarete","email":"mcuolahan5@buzzfeed.com"},
{"id":7,"first_name":"Gan","email":"gzaczek6@lycos.com"},
{"id":8,"first_name":"Rem","email":"rcockell7@telegraph.co.uk"},
{"id":9,"first_name":"Vernice","email":"vtracy8@thetimes.co.uk"},
{"id":10,"first_name":"Aurthur","email":"amcnellis9@elegantthemes.com"}]
`; 	//json포맷을 object로 변경할 때 : JSON.parse() 사용
let members = JSON.parse(json);
console.log(members);

let delMember = "Ginnifer";
let myinfo = {id:0,first_name:"Seo",email:"hn05035@naver.com"}

for(let i=0;i<members.length;i++){
	if(members[i].first_name == delMember){
		members.splice(i,1);
	}
}
console.log(members);

members.splice(0,0,myinfo);
members.forEach((mem,idx)=>{
	if(mem.id==myinfo.id){
		members.splice(idx,1);
	}
})

let inpVal = prompt('이름과 이메일을 입력하세요. 예)홍길동, hong@email.com');

let name = inpVal.slice(0,inpVal.indexOf(','))	//inpVal.split(',')->이렇게 해서 인덱스 번호로 0,1을 불러오면 됨
let mail = (inpVal.slice(inpVal.indexOf(',')+1)).replace(/\s/g,'');
let nid = members[members.length-1].id+1;
let newMem = {id:nid,first_name:name,email:mail}
members.push(newMem)
console.log('추가 후:',members);

const dupAry = [["라이언",5],["어피치",3],["콘",2],["무지",4]];	//p198
console.log(dupAry);
console.table(dupAry);
=======
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


>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
