<<<<<<< HEAD
//string3.js

let today = new Date();	//Date는 자바스크립트가 가지고 있는 객체(내장객체)
today.getFullYear();
today.getMonth();
today.getDate();
today.getDay();

//날짜 변경
//today.setFullYear(2022);
//today.setMonth(0);
//today.setDate(1);
//today.setHours(10)

console.log(today.toString());	//toISOString을 쓰면 원래 시간에서 9시간을 빼서 나옴
console.log(today.toLocaleDateString());

function dateFormat(today){
	//yyyy-mm-dd hh24:mm:ss
	return today.getFullYear()+"-"+("0"+(today.getMonth()+1)).slice(-2)+"-"+("0"+today.getDate()).slice(-2)+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	
}
console.log(dateFormat(today));
=======
// string3.js

let today = new Date(); // Date

today.getFullYear(); //2023
today.getMonth(); // +1 해야 우리가 아는 달
today.getDate(); // 오늘 26일이라 26



today.setFullYear(2022);
today.setMonth(0);
today.setDate(1);

console.log(today.toString());

function dateFormat(today) {
	// yyyy-MM-dd hh24:mm:ss
	return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + ":" +
		today.getMinutes() + ":" + today.getSeconds();

}

console.log(dateFormat(today))
console.log(today.toLocaleString())
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
