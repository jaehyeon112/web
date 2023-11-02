<<<<<<< HEAD
//function5.js

let sum = 0;
[10,20,30].forEach(function(num){
	sum += num;		//consumer 타입 : 매개값을 소진하고 반환값은 존재하지 않는 타입
});
console.log(sum);

sum = 0;
sum = [10,20,30].reduce(function(acc,item,idx,ary){	//acc = 초기값
	console.log(acc,item, idx);
	return item;	//function 타입 : 매개값을 소진하고 반환값을 생성
},0);//초기값으로 0을 설정

console.log(sum);

function sum1(a=0,b=0,...args){		//매개변수			//...은 펼침 연산자 : 값이 몇개 들어올지 모를 때
	console.log(args);
	//return a + b + args.reduce((acc,item) => acc+item);		//function 간단하게 표현하기 reduce(function(acc,item){return acc+item});
	let result  = 0;
	result = a + b;
	args.forEach(num => result += num);
	return result;
}

//console.log(sum(10));	//함수에 값을 지정해주지 않으면 b와 c는 undefined
console.log('sum1의 값',sum1(10,20,30,40,50));	//앞에 3개의 값만 가져와서 씀	//매개값

//reduce 연습
const numAry = [4,2,6,9,1,7];
let max = 0;
numAry.reduce(function(acc,item){
	if(item>max){max = item;}
	return max;
});

//max = numAry.reduce((acc,item)=>acc>item ? acc : item);
console.log('최대값 : ',max)

=======
console.log('=====================================')
let sum1 = 0;

[10,20,30].forEach(function(ele){ //consumer : 매개값을 소진, 반환값은 없음
	sum1 += ele;
})

sum1 = [5,10,15].reduce(function(acc, ele, idx, ary){  // acc = 초기값, 
	console.log(`${idx}번째 acc : ${acc}`)
	return acc + ele
}); // 0은 acc에 0부터라는 뜻으로...

console.log(`배열의 합은 : ${sum1}`)
console.log('=====================================')


function sum(a=0,b=0, ...args){
	return a + b + args.reduce((acc, ele)=>{
		return acc + ele;
	});
}

console.log(sum(10,20,30,40,50,60,70,80));

console.log('=====================================')

const numAry = [4,2,6,9,1,7]

let max = 0;

numAry.reduce(function(acc,ele){
//  if(ele > max){
// 	max = ele;
//  } 
max = Math.max(ele,max)
 return max;
},0)



console.log('max최대값 : ' , max)
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
