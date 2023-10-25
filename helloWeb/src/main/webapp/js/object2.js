// object2.js
const students = [
    {sno : '001', sname:"최해주", eng : 80, math : 85},
    {sno : '002', sname:"김채민", eng : 82, math : 83},
    {sno : '003', sname:"최다예", eng : 84, math : 88}
]

const mem = new Member('개똥', 50, 150)
//member.makeHtml(students); makeTr 활용.
//member.showPage(document.getElementById('show')) => 

mem.makeHtml(students)
mem.showPage(document.getElementById('show'));


// document.getElementById('show')
// students.forEach(function(ele){
//     console.log(ele.eng)
// });