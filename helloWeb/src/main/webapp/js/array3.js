//array3.js

let pos = "Hello, world".indexOf(",") // 없으면 -1, 있으면 해당 인덱스

let names = ["콘","무지","라이언","어피치"];

pos = names.indexOf("지");

let test = {name : "abc" ,age: 20}

let testconsole = test.name.indexOf("a");

console.log(pos)
console.log(testconsole)



if(pos == -1){
	console.log("없는 이름입니다.")
}else{	
console.log('무지의 인덱스 값은 : ',pos)
}

// {name : "", age: 20} 
let members = [
	{name: "김민식", age: 22},
	{name: "최민식", age: 23},
	{name: "김우현", age: 24},
	{name: "개민식", age: 24}
]

let search ="민식";
let count = 0;
members.forEach(function(ele){
	if(ele.name.indexOf(search)!=-1){
		count++;
	}
})



console.log(`이름에 민식이 포함되는 경우는 총 : ${count}명 입니다.`)