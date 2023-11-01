<<<<<<< HEAD
//array4.js

const json = `
[{"id":1,"first_name":"Abra","email":"aferry0@fotki.com"},
{"id":2,"first_name":"Renault","email":"rkollasch1@businesswire.com"},
{"id":8,"first_name":"Rem","email":"rcockell7@telegraph.co.uk"},
{"id":9,"first_name":"Vernice","email":"vtracy8@thetimes.co.uk"},
{"id":10,"first_name":"Aurthur","email":"amcnellis9@elegantthemes.com"}]
`;

let members = JSON.parse(json);
let result = members.find(function(val,idx,ary){	//find => 조건에서 첫번째 true인 값을 만나면 그 값을 보여줌
	if(val.id>5){
		return true;
	}return false;
	//return value.id > 5;	
});
console.log('1:',result);

result = members.filter(function(val){		//filter => 조건에 만족하는 모든 true값을 보여줌
	return val.email.includes('com');
})
console.log('2:',result);

result = members.filter((val,idx)=>{
	return idx>=1 && idx<3
})
console.log('3:',result);

result = members.reduce((acc,item,idx)=>{
	if(idx>=1 && idx<3){
		acc.push(item);
	}
	return acc;
},[]);
console.log('4:',result);

//some,every => true,false

result = members.some((mem)=>{		//some은 하나라도 만족하면 되기때문에 조건에 만족하는 모든 값을 출력, every는 하나라도 false가 나오면 거기서 멈춤
	console.log(mem)
	return mem.first_name.length > 5;
})
console.log('5:',result);
console.clear();

//*) map : A -> B로 변경
result = members.map(mem => {	//새로운 정보를 넣어주고 싶을 때 map
	let obj = {id:mem.id,name:mem.first_name,email:mem.email,grade:'C'}
	return obj
})
console.log('6:',result);
=======
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
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
