<<<<<<< HEAD
//function4.js

//생성자 함수=>Member
function Member(name,age,height){
    this.name = name;
    this.age = age;
    this.height = height;
    this.showInfo = function(){
        return `저의 이름은 ${name}입니다`
    }
}
//makeTr 함수
function makeTr(mem){
    let str = '';
    str += '<tr>';
    str += '<td>'+mem.name+'</td>'
    str += '<td>'+mem.age+'</td>'
    str += '<td>'+mem.height+'</td>'
    str += '<td>'+mem.showInfo()+'</td>'
    str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>'
    str += '</tr>';
    return str;
}

document.getElementById('saveBtn').onclick = function(e){
    console.log(e.target);
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

    if(!name || !age || !height){
        alert('값을 입력하세요');
        return;	//함수종료
    }
    
    const mem = new Member(name,age,height);
    let str = makeTr(mem);	//<tr></tr>

    document.getElementById('list').innerHTML += str;
    // function Member(), makeTr(member)

    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('height').value = "";
    document.getElementById('name').focus();
}

=======
// 생성자 함수 .. Member


// makeTr 함수.



document.getElementById('saveBtn').onclick = function(e){
    console.log(e.target);
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    
    if(!name || !age || !height){
		alert('값을 입력하시오.');
		return;
	}

    const mem = new Member(name, age, height);
    
    function makeTr(name,age,height){
        let html = "";
        html += `<tr>`
        html += `<td>${name}</td>`
        html += `<td>${age}</td>`
        html += `<td>${height}</td>`
        html += `<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>`
        html += `</tr>`
        return html;
    }


    function Member(name, age, height){
        let html = "";
        html = makeTr(name,age,height);
        document.getElementById('list').innerHTML += html;
        // function Member()....., makeTr(member)
    }

        console.log(e.target);
        document.getElementById('name').value=""; 
        document.getElementById('age').value=""; 
        document.getElementById('height').value=""; 
        document.getElementById('name').focus(); 
    }
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git

