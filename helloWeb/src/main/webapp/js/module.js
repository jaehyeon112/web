//module.js
// script type을 module로 선언해줘야 임포트 가능
import{friendInfo,friend } from './friend.js'
import{ calendar } from '../todo/calendar.js'



/*const friend = {
	name: "Hong",
	phone: "010-1111-2222",
	address: "대구 중구 100",
	showInfo: function() { return `이름은 ${this.name}이다.`}
	
}
*/
console.log(friend.showInfo())

console.log(friendInfo(friend))