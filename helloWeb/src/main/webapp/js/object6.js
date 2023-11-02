//object6
<<<<<<< HEAD
//map,set

const map = new Map();
map.set("홍길동",80);
map.set("김민수",85);
map.set("김민수",100);	//기존값을 덮어버림
map.set("이지은",92);

map.delete("이지은");

const refval = [12];
map.set(refval,88);
map.get(refval);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for(let ent of map.entries()){	//모든 키와 값을 배열타입으로 반환해줌
	console.log(ent)
	console.log('이름 : ',ent[0],',점수 : ',ent[1]);
}

map.forEach(function(a,b,c){	//value,key,map자체 순으로 가져옴
	console.log(a,b,c);
})

//val에 조건을 줄 때
map.forEach(function(val,key,map){
	if(val > 90){
		console.log(val,key)
	}
})

//홍길동(key)의 점수만 보고 싶을 때
map.forEach(function(val,key){
	if(key=="홍길동"){
		console.log(val)
	}
})

//맵 <-> 배열
//배열 안에 다시 배열로 선언되어 있음
const ary = [['프로도',3],['라이언',5],['어피치',4]];
//map(생성자:배열)
const fmap = new Map(ary);
console.log(fmap)
for(let ent of fmap.entries()){
	console.log(ent);
	console.log('키 값 : ',ent[0],',값 : ',ent[1]);
}

const entries = fmap.entries();
console.log(entries)	//entries : mapIterator 타입
console.log(Array.from(fmap));

console.clear();

//set: 중복된 값은 허용하지 않음
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add("어피치");

console.log(set1.size);
set1.forEach(function(val,item,set){		//첫번째 두번째 모두 값을 보여주고 마지막은 set자체를 보여준다
	console.log(val,item,set);
})

const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry);
set2.add("콘");
set2.add("무지");
set2.add("프로도");

console.log(set2.size);
console.log(Array.from(set2));
=======
//Map,Set

const map = new Map();
map.set("홍길동",80); // 값을 넣을땐 set, 자바에서는 put
map.set("김길동",85); // 키에는 배열도 넣을 수 있으나 주소를 찾아서 get으로 나타내긴 어려우므로, 변수명에 받아서 써야함. 
// map.delete("김길동"); 삭제할땐 delete
map.set("김길동",90); // 같은 키의 값은 뒤에 온 값으로 대체, 중복x


console.log(map.get("홍길동"));  // 해당되는 키의 value를 가져올때는 get

map.forEach(function(value,key){
	if(value > 80){		
	console.log(`이름 : ${key}, 점수: ${value}`)	
	}
})

// 맵 <-> 배열 
const ary = [ ['프로도',3], ['라이언',5], ['어피치',4] ];
const fmap = new Map(ary); // 배열을 map타입으로 변환할때 Map의 생성자에 배열을 넣어준다. 앞에 있는것은 [key : value]의 형태로 맵이 생김.

fmap.forEach(function(v,k){
	console.log(`fmap의 Key: ${k} , value: ${v} `)
})

console.log(fmap.entries()) // Map의 반복자
console.log(Array.from(fmap)) // 맵 -> 배열로 변환 Array클래스의 정적메서드 사용한것임.


// Set : 중복값 허용 X..
const set1 = new Set();

set1.add("라이언"); // 값을 넣을때 add
set1.add("어피치");
set1.add(["프로도"]); // 보기에는 같은 값이나 배열은 각각 다른 참조값을 가지고 있으므로 size = 4
set1.add(["프로도"]);

console.log(set1.size) // 크기를 알아내려면 size 속성사용

set1.forEach((key,value,array)=>{   // Set같은 경우엔 key와 value가 같은 Map으로 생각하자
	console.log(key,value,array)
})

// 셋 <-> 배열
const setAry = ['라이언','프로도','무지','무지']
const set2 = new Set(setAry) // 배열을 Set 타입으로 변경하겠다는 의미. 배열의 경우엔 index로 각각의 값을 구분해서 동일한 값이어도 나오지만, Set은 중복이 안되므로 set2.size = 3;
console.log(set2.size)
console.log(Array.from(set2)); // Map과 마찬가지로 Array.from() 을 사용하여 Set -> 배열로 변경
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
