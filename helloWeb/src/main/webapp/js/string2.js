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





