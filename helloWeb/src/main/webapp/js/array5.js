//array.5
const json = `
[{"id":1,"first_name":"Hughie","email":"hbingell0@tumblr.com"},
{"id":2,"first_name":"Nicol","email":"nhucker1@timesonline.co.uk"},
{"id":3,"first_name":"Becky","email":"bschneidar2@bloglines.com"},
{"id":8,"first_name":"Row","email":"ritzkovich7@businessweek.com"},
{"id":9,"first_name":"Yolane","email":"ylively8@t-online.de"},
{"id":10,"first_name":"Wiatt","email":"wgreystock9@forbes.com"}]
`
let members = JSON.parse(json);

let sortMembers = members.sort((a,b) => {
	
	if(a.first_name < b.first_name){
		return -1
	}else{
		return 1
	}
	}).reverse();
console.log(sortMembers)


const arr1 = ['펭수','라이언','어피치','콘','무지']
arr1.sort();
console.log(arr1) // 배열 자체를 변경

const arr2 = [4,8,1,12,23,9]
console.log(arr2.sort((a,b)=>a-b)) 