// friend.js
// 모듈로써 사용할것이므로 내가 밖으로 유출시키고 싶은 것만 export를 붙여야함.

const friend = {
	name: "Hong",
	phone: "010-1111-2222",
	address: "대구 중구 100",
	showInfo: function() { return `이름은 ${this.name}이고, 연락처는 ${this.phone}입니다.`}
	
}

function friendInfo(friend){ 
	return `${friend.name}, ${friend.phone}, ${friend.address}`	
}


export {friend , friendInfo}