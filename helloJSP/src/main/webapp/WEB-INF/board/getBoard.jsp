<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
				<td><%=vo.getBoardNo()%></td>
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
				<td><img width="80px" style="align: center"
					src="images/<%=vo.getImage()%>"></td>
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
	<script>
	
	//form의 경로를 재지정해줘야해서
		document.querySelector('input[type=button]').addEventListener('click',
				function(e) {
					document.forms.myForm.action = 'removeForm.do'
					document.forms.myForm.submit();
				});
	</script>


<%@include file="../layout/footer.jsp" %>