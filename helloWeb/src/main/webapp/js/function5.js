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
