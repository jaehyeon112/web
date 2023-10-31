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

