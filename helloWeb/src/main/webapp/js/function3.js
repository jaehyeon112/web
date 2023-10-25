// function3.js

function Member(name, age, height) {
    // 반드시 기억 : 함수 안에서의 this = window 객체임
    console.log(this);
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function () {
        return `이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`
    }
}

var myName = 'Hong';

const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo())

const members = [
    new Member('홍길동', 18, 123.3),
    new Member('김길동', 19, 145.6),
    new Member('최길동', 22, 145.6),
    new Member('박길동', 20, 179.2),
]

// 함수 : table 생성.
function makeTable(memberAry = []) {
    let show = document.getElementById(`show`)

    let str = `<table border="1" ><thead style = "background-color:red">`
    str += `<tr><th>이름</th><th>나이</th><th>키</th></tr></thead>`
    str += `<tbody>`
    memberAry.forEach(function (item) {
        str += `<tr>`;
        str += `<td>${item.name}</td>`
        str += `<td>${item.age}</td>`
        str += `<td>${item.height}</td>`
        str += `</tr>`;
    })
    str += `</tbody></table>`;
    show.innerHTML = str;
}


makeTable(members);