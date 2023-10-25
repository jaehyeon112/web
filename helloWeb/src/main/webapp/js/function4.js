// 생성자 함수 .. Member


// makeTr 함수.



document.getElementById('saveBtn').onclick = function(e){
    console.log(e.target);
    
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;

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

