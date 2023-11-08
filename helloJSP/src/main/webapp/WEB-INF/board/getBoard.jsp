<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<style>
#list span {
	margin: 8px;
}
</style>

<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>
<!-- 
 BoardVO vo = (BoardVO) request.getAttribute("vo");
 -->
<h3>상세화면(조회화면)</h3>
<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="${vo.boardNo }">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo">${vo.boardNo}</td>
			<th>작성일시</th>
			<td><fmt:formatDate value="${vo.writeDate}" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3">${vo.title}</td>
		</tr>
		<tr>
			<td colspan="4"><textarea> ${vo.content}</textarea></td>
		</tr>
		<tr>
			<th>이미지</th>

		<c:choose>
		<c:when test="${!empty vo.image }"> 
			<td><img width="80px" style="align: center" src="images/${vo.image}"></td>
		</c:when>
		</c:choose>

		</tr>
		<tr>
			<th>작성자</th>
			<td>${ vo.writer}</td>
			<th>조회수</th>
			<td>${vo.viewCnt}</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
			
			<c:choose>
			<c:when test="${!empty logId && logId == vo.writer}">
			<input type="submit" value="수정"> <input type="button" value="삭제">
			</c:when>
			<c:otherwise>
				 <input disabled type="submit" value="수정"> <input disabled type="button" value="삭제">
			</c:otherwise>
			</c:choose>
			</td>
		</tr>
	</table>
</form>
<h3>댓글등록</h3>
<table class="table">
	<tr>
		<th>댓글내용</th>
		<td><input type="text" id="content"></td>
		<td><button id="addReply">댓글등록</button></td>
	</tr>
</table>

<h3>댓글목록</h3>
<ul id="list">
	<li style="display: none" id="template"><span>00</span><b>첫번째글입니다.</b><span>user01</span><span>2023-10-10</span>
	<button>삭제</button></li>
</ul>

<div class="pagination">
</div>

<script>
	//form의 경로를 재지정해줘야해서
 	document.querySelector('input[type=button]').addEventListener('click',
		function (e) {
			document.forms.myForm.action = 'removeForm.do'
			document.forms.myForm.submit();
		});
 
	let bno = "${vo.boardNo}";
	bno = document.querySelector('.boardNo').innerHTML;
	let page = 1;
	showList();

	function showList(pg = 1){
	document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li => li.remove());
	fetch('replyList.do?bno=' + bno + '&page='+pg).then(resolve => resolve.json()).then(result => {
		
		if(pg < 0){
			page = Math.ceil(result.dto.total/5)
			showList(page);
			return;
		}
		
		let ul = document.querySelector('#list')
		// foreach를 이용해서 댓글 생성(li)
		result.list.forEach(element => {
			let li = makeRow(element);
			document.querySelector('#list').append(li)
		});
		//page생성
		console.log(result.dto)
		makePaging(result.dto)
		
		
	}).catch(err=>console.log(err));
	}
	//한번실행

	//페이지 생성 함수
	function makePaging(dto={}){
		document.querySelector('.pagination').innerHTML = '';
		if(dto.prev){
			let aTag = document.createElement('a');
			aTag.setAttribute('href',dto.startPage-1);
			aTag.innerHTML = "&laquo";
			document.querySelector('.pagination').append(aTag);

		}
		for (let i = dto.startPage; i <= dto.endPage; i++ ){
			let aTag = document.createElement('a');
			aTag.setAttribute('href',i);
			aTag.innerHTML = i;
			// active=녹색.
			if (i == page){
				aTag.className = 'active';
			}
			document.querySelector('.pagination').append(aTag);
		}
		if(dto.next){
			let aTag = document.createElement('a');
			aTag.setAttribute('href',dto.endPage+1);
			aTag.innerHTML = "&raquo";
			document.querySelector('.pagination').append(aTag);
		}
		
		// aTag에 클릭이벤트를 넣자!
		// 나 이거 낯서니까 공부..
		document.querySelectorAll('.pagination a').forEach(ele => {
			ele.addEventListener('click',function(e){
				e.preventDefault(); // form, a는 클릭하면 서버가 바뀌므로, 기본 값을 차단하는것
				page = ele.getAttribute('href');
				showList(page);
			})
		})
	}

	function makeRow(element){
		let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display = 'block'
			console.log(element)
			temp.querySelector('span:nth-of-type(1)').innerHTML = '  '+element.rn;
			temp.querySelector('b').innerHTML = '  '+ element.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML ='  '+ element.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = '  '+element.replyDate;
			
			if(element.replyer!='${logId}'){
				temp.querySelector('#template > button').addEventListener('click',function(){
				alert('글쓴이만 지울 수 있습니다!.');
				})
			}else{
				
			temp.querySelector('#template > button').addEventListener('click',function(e){
				fetch('delReply.do?replyNo='+element.replyNo).then(resolve=>resolve.json()).then(result => {if(result.retCode == 'OK'){
					alert('Success!!')
					temp.remove();
					let del = document.querySelectorAll('#list li:not(:nth-of-type(1))').length==0
					if(del){						
					showList(-1)
					}else{
						showList(page)
					}
					
				}else{
					arlert('Error!!')
				}
					}).catch(err=>{console.log(err , '입니다')})
				})
			}
			return temp;
			}

	// 등록버튼에 대한 이벤트
	document.querySelector('#addReply').addEventListener('click',function(e){
		let reply = document.querySelector('#content').value;
		let writer = "${logId}";
		console.log(writer);
		console.log(bno);
		console.log(reply);

		 if(!bno || writer == 'null' || !reply){
		alert('값을 확인하세요')
			return;
		}
 
		// ajax 호출// bno , writer, reply
		fetch('addReply.do',{
			method:'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'bno='+bno+'&reply='+reply+'&replyer='+writer
		}).then(resolve => resolve.json()).then(result => {
			if(result.retCode == 'Ok'){
				//document.querySelector('#list').append(makeRow(result.vo));
				//document.querySelector('#content').value ='';
				showList(-1);
			}else{
				alert('Error!')
			}
		}).catch(err=>console.log(err));

	})


</script>



<jsp:include page="../layout/footer.jsp"></jsp:include>