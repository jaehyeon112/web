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