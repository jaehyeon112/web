<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<style>
		#list span{
			margin: 8px;
		}


	</style>

<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>
<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>

<h3>상세화면(조회화면)</h3>
<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo"><%=vo.getBoardNo()%></td>
			<th>작성일시</th>
			<td><%=vo.getWriteDate()%></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>
		</tr>
		<tr>
			<td colspan="4"><textarea><%=vo.getContent()%></textarea></td>
		</tr>
		<tr>
			<th>이미지</th>

			<%if(vo.getImage()!=null){ %>
			<td><img width="80px" style="align: center" src="images/<%=vo.getImage()%>"></td>
			<%} %>
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getWriter()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<% if(logId != null && logId.equals(vo.getWriter())){ %>
				<input type="submit" value="수정">
				<input type="button" value="삭제">
				<%}else{
					%>
				<input disabled type="submit" value="수정">
				<input disabled type="button" value="삭제">
				<% } %>
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
	<li style="display:none" id="template"><span>00</span><b>첫번째글입니다.</b><span>user01</span><span>2023-10-10</span><button>삭제</button></li>
</ul>
<script>
	//form의 경로를 재지정해줘야해서
	document.querySelector('input[type=button]').addEventListener('click',
		function (e) {
			document.forms.myForm.action = 'removeForm.do'
			document.forms.myForm.submit();
		});



	let bno = "<%=vo.getBoardNo()%>";
	bno = document.querySelector('.boardNo').innerHTML;
	fetch('replyList.do?bno=' + bno).then(resolve => resolve.json()).then(result => {
		let ul = document.querySelector('#list')
		console.log(result);
		result.forEach(element => {
			let li = makeRow(element);
			document.querySelector('#list').append(li)
		});
	}).catch(err=>console.log(err));


	function makeRow(element){
		let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display = 'block'
			console.log(temp);
			temp.querySelector('span:nth-of-type(1)').innerHTML = '  '+element.replyNo;
			temp.querySelector('b').innerHTML = '  '+ element.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML ='  '+ element.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = '  '+element.replyDate;
			temp.querySelector('button').
			return temp;
	}

	// 등록버튼에 대한 이벤트
	document.querySelector('#addReply').addEventListener('click',function(e){
		let reply = document.querySelector('#content').value;
		let writer = "<%=logId%>";
		console.log(writer);
		console.log(bno);
		console.log(reply);

			if(!bno || writer==null || !reply){
			alert('값을 확인하세요')
			return;
		}

		// ajax 호출// bno , writer, reply
		fetch('addReply.do',{
			method:'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: 'bno='+bno+'&reply='+reply+'&replyer='+writer
		}).then(resolve => resolve.json()).then(result => {
			console.log(result)
			if(result.retCode == 'Ok'){
				document.querySelector('#list').append(makeRow(result.vo));
				document.querySelector('#content').value ='';
			}else{
				alert('Error!')
			}
		})

	})

</script>


<%@include file="../layout/footer.jsp" %>