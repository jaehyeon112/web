console.log('function2.js')

const member = {
    name: "홍길동",
    age: 18,
    height: 178.9,


    //메서드
    showinfo: function () {
        return (`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`)
    }
}

const member1 = {
    name: "박길동",
    age: 12,
    height: 148.9,


    //메서드
    showinfo: function () {
        return (`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`)
    }
}

const member2 = {
    name: "김길동",
    age: 22,
    height: 180.9223,


    //메서드
    showinfo: function () {
        return (`이름은 ${this.name}이고, 나이는 ${this.age} 입니다.`)
    }
}



member.showinfo();

// DOM : Document Object Model 
let show = document.getElementById(`show`);


let str = `<table border="1"><tbody>`;
const members = [member, member1, member2];
members.forEach(function(item) {
    str +=makeTr(item);
});
str += `</tbody></table>`

//코드 작성....
show.innerHTML = str; //table>tbody>(tr>td*4)*3

function makeTr(member = {
    name,
    age,
    height,
    showinfo
})


{ //member={} 객체 타입으로 오겠다는 의미.
    let html = '';
    html += '<tr>';
    html += '<td>' + member.name + '</td>';
    html += '<td>' + member.age + '</td>';
    html += '<td>' + member.height + '</td>';
    html += '<td>' + member.showinfo() + '</td>';
    html += '</tr>';
    return html;
}

