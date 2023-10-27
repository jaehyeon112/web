// array4.js

const json = `
[{"id":1,"first_name":"Hughie","email":"hbingell0@tumblr.com"},
{"id":2,"first_name":"Nicol","email":"nhucker1@timesonline.co.uk"},
{"id":3,"first_name":"Becky","email":"bschneidar2@bloglines.com"},
{"id":8,"first_name":"Row","email":"ritzkovich7@businessweek.com"},
{"id":9,"first_name":"Yolane","email":"ylively8@t-online.de"},
{"id":10,"first_name":"Wiatt","email":"wgreystock9@forbes.com"}]
`

let members = JSON.parse(json)

// 1) find
let result = members.find(ele => {
	if (ele.id > 5) {
		return true;
	}
	return false;
})

// 2) filter 
result = members.filter((ele)=>ele.id > 5)
result = members.filter((ele,index,arr) => index >= 1 && index < 3 )
console.log('filter : ',result)

// 3) reduce
result = members.reduce((acc, ele, idx)=>{
	if(idx >= 1 && idx < 3){
		acc.push(ele)
	}
	return acc;
}, [])

// 4) some, every => true / false;
result = members.some(ele=> ele.first_name.length > 5)
result = members.every(ele => ele.first_name.length >5)


// *) map : A의 형태를 B로 바꾸는 등의 특징이 있다.
result = members.map(ele => {
	let obj = {id: ele.id, name : ele.first_name, email: ele.email, grade: 'C'}
	return obj;
})

console.log(result)