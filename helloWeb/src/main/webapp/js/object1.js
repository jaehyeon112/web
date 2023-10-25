//object1.js
//클래스의 추가 메소드 작성. prototype 속성에 지정
Member.prototype.setBloodType = function (bloodType) {
    this.bloodType = bloodType;
}
Member.prototype.getBloodType = function () {
    return this.bloodType;
}

const mem2 = new Member('홍길동', 22, 180);

mem2.setBloodType('AB');
console.log(mem2.getBloodType())

//자바스크립트에 선언되어있는 클래스 타입인 String에 prototype 속성을 이용하여 새로 추가 메서드를 작성
String.prototype.truncate = function(){
    console.log(this)
    return this.substring(0,5);
}

let result = "hellogWorld".truncate();
console.log(result)