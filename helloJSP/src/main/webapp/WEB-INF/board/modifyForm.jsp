<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>
<%
BoardVO vo = (BoardVO) request.getAttribute("vo");
%>
<h3>게시글 수정화면</h3>
<form action="modifyBoard.do" method="POST"
	enctype="multipart/form-data">
	<input type="hidden" name="bno" value="${vo.boardNo}">
	<table class="table">
		<tr>
			<th>제목</th>
			<td><input class="form-control" type="text" name="title"
				value="${vo.title}"></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td><input type="text" name="writer" class="form-control"
				value="${vo.writer}"></td>
		</tr>
		<tr>
			<td colspan="2"><textarea class="form-control" cols="40"
					rows="5" name="content">"${vo.content}"</textarea></td>
		</tr>
		<tr>
			<th>파일명</th>
			<td><img src="images/${vo.image}" width="80px"></td>
		</tr>
		<tr>
			<td><input type="file" name="img"></td>
		</tr>
		<tr>
			<td colspan="2"><input type="submit" value="수정"
				class="btn btn-primary"> <input type="reset" value="초기화"></td>
		</tr>
	</table>
</form>
<jsp:include page="../layout/footer.jsp"></jsp:include>