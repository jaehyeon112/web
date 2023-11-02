<<<<<<< HEAD
//string2.js

const words ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae id quod distinctio explicabo alias architecto at vero, ut totam cum laudantium voluptatum ipsa, repellat excepturi a asperiores. Architecto, vitae consequatur.';
//1. 각각의 단어를 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력
let overword = words.match(/\s\w+/gi);
for(let i=0;i<overword.length;i++){
	if(overword[i].length>5){
	console.log(overword[i]);
	}
}


//2. 주민번호를 입력받아서 그 사람이 남자인지 여자인지 구분
let ssn =prompt('주민번호를 입력하세요')
function checkGender(ssn){
	//990912 2134252 형태든 9909122134252 형태든 990912-2134252 형태든 상관없이 구분이 가능해야함
	if(ssn.length==14){
		let gendernum = ssn.substr(7,1)
		if(gendernum==1){
			console.log("남자입니다");
		}else if(gendernum==2){
			console.log("여자입니다");
		}else{
			console.log("번호가 정확하지 않습니다");
		}
	}else if(ssn.length==13){
		let gendernum = ssn.substr(6,1)
		if(gendernum==1){
			console.log("남자입니다");
		}else if(gendernum==2){
			console.log("여자입니다");
		}else{
			console.log("번호가 정확하지 않습니다");
		}
	}
}
checkGender(ssn);
//3. 파일명과 파일 확장자
let file = "d:/temp/sample/book.xls";
let fileName, fileExt;	//파일명과 확장자 구하기


let ext = file.match(/.\w+/gi);
for(let i=0;i<ext.length;i++){
	if(ext[i].includes('.')==true){
		fileExt = ext[i].slice(1);
		fileName = ext[i-1].slice(1);
	}
}

console.log('파일 이름 : ',fileName);
console.log('확장자 : ',fileExt);
=======
// string2.js

const words = "lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam repellendus natus, vel dolorum eius consequatur aliquam, explicabo eum dolor rem fugiat veritatis commodi! Deserunt eaque consectetur quas, excepturi adipisci laborum."

// 1.공백을 기준으로 가져온 단어의 크기가 5 > 큰 문장을 콘솔출력
let fiveWord = '';
fiveWord = words.replace(/,/g,'').replace(/\./g,'').replace(/!/g,'')
for (let i = 0; i < fiveWord.split(' ').length; i++) {
	if (fiveWord.split(' ')[i].length > 5) {
		console.log(fiveWord.split(' ')[i])
	}
}


// 2.생년월일 입력 받아 남자/여자 구분
function checkGender(ssn) {
	// 950305 1678532 ==> 남자 or 공백없이 숫자를 넣기도하고, 하이픈(-)을 넣기도하지만 남/녀를 구분해야함  
	if(ssn.length >= 15){
		return "다시 입력하세요."
	}else if(ssn.slice(-7,-6)=='1' || ssn.slice(-7,-6)=='3' ){
		return "남자!"
	}else{
		return "여자!"
	}
}

let ssn = prompt("생년월일을 입력하세요.");
console.log(checkGender(ssn))


// 3.파일명과 파일의 확장자. book = 파일명, xls = 확장자를 fileName, fileExt에 넣자.
let file = "d:/temp/sample/booccxczxk.xxzczxcxzcxls";

let fileExt = file.slice(file.lastIndexOf('.')+1)
let fileName = file.slice(file.lastIndexOf('/')+1)
fileName = fileName.slice(0,fileName.indexOf('.'))


console.log(`파일명 : ${fileName} 파일확장자 : ${fileExt}`)



>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git


