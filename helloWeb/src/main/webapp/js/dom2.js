<<<<<<< HEAD
//dom2.js

//#show>table>tbody>(tr>td:사과+td:1000)
const fruits = [
	{name:"사과",price:1000, farmer : '홍길동'},
	{name:"복숭아",price:1500, farmer : '김민서'},
	{name:"포도",price:2000, farmer : '이미자'},
	{name:"수박",price:3000, farmer : '김선중'}
]

const tb = document.createElement('table');
tb.setAttribute('border','1');

const thead = document.createElement('thead');
tb.appendChild(thead);
thead.setAttribute('bgcolor','pink');

const title = ["과일명",'가격','생산자'];
title.forEach(tt => {
	const th1 = document.createElement('th');
	th1.innerHTML = tt;
	thead.appendChild(th1);
});

const tbody = document.createElement('tbody');
fruits.forEach(fruit => {
	const tr = document.createElement('tr');
	
	for(let prop in fruit){		//변수가 많을 때는 for문을 돌려서 사용
		const td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1);	
	}
	tbody.appendChild(tr);
})
tb.appendChild(tbody);

document.getElementById('show').appendChild(tb);
=======
// dom2.js

// #show => table>tbody>tr>td:사과+td:1000
const fruits = [
	{ name: "과일이름", price: "가격", farmer:"만든사람" },
	{ name: "사과", price: 1000, farmer:"홍길동" },
	{ name: "배", price: 2500, farmer:"박길동" },
	{ name: "복숭아", price: 3000, farmer:"최길동" },
	{ name: "딸기", price: 4500, farmer:"정길동" }
]

let table = document.createElement('table');
table.setAttribute('border', '1')
let tbody = document.createElement('tbody');

fruits.forEach((ele,index) => {
	let tr = document.createElement('tr');
	if(index == 0){
	tr.setAttribute('style','background-color:#ccc')		
	}
	
	//객체는 for in으로 반복
	for(let prop in ele){
		let td = document.createElement('td');
		td.innerHTML = ele[prop]
		tr.appendChild(td);
	}
	
	tbody.appendChild(tr);
})

table.appendChild(tbody);

let show = document.querySelector('#show');
show.appendChild(table)

>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
