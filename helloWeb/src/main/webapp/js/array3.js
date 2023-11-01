//array3.js

<<<<<<< HEAD
let pos = "Hello, World".indexOf(',');
console.log(pos);

let name = ['콘','무지','라이언','어피치','브라운'];
pos = name.indexOf('무시')

if(pos==-1){
	console.log('찾는 값이 없습니다')
}else{
	console.log('무지의 위치 : ',name+1);
}

//객체 타입{name,age}
let members = [
	{name:'김민식',age:25},
	{name:'서영희',age:26},
	{name:'조민식',age:32},
	{name:'이민식',age:32}
];
let search='민식';
let count = 0;
members.forEach((mem)=>{
	if(mem.name.indexOf(search) != -1){
		count++;
	}
})
console.log('민식은 총',count,'명입니다')
=======
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
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
