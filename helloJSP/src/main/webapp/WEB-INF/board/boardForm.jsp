<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>


	<h3>게시글 등록화면</h3>							<!-- 파일 전송하려면 multipart/form-data -->
	<form action="addBoard.do" method="POST" enctype="multipart/form-data">
	<table class="table">
		<tr>
			<th>제목</th>
			<td><input class="form-control" type="text" name="title"></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input  class="form-control" type="text" readonly name="writer" value="<%=logId %>"></td>
		</tr>
		<tr>
			<td colspan="2"><textarea class="form-control"  cols="40" rows="5" name="content"></textarea></td>
		</tr>
		<tr>
		<th>파일명</th>
		<td><input class="form-control" type="file" name="img"></td>
		</tr>
		<tr>
			<td colspan="2">
				<input type="submit" value="저장"> 
				<input type="reset" value="초기화">
			</td>
		</tr>
	</table>
	</form>
<%@include file="../layout/footer.jsp" %>