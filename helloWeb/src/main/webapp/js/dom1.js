//dom1.js
// #show > ul > li:수박... 과 같은 형태로 만들어보자!
const fruits = ['수박', '사과', '복숭아', '포도'];

let show = document.querySelector('#show')
let ul = document.createElement('ul');
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let li4 = document.createElement('li')

li1.innerHTML = fruits[0];
li2.innerHTML = fruits[1];
li3.innerHTML = fruits[2];
li4.innerHTML = fruits[3];

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

// 더 쉽게 하는 방법
fruits.forEach(ele => {
	let newli = document.createElement('li');
	newli.innerHTML = ele;
	ul.appendChild(newli);
})
show.appendChild(ul);