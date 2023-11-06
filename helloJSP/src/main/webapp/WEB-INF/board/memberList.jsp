<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>


	<h3>게시판 목록.</h3>
	<%
	List<MemberVO> list2 = (List<MemberVO>) request.getAttribute("list2"); // list<BoardVO> list;
	%>

	<table class="table">
		<thead>
			<tr>
				<th>아이디</th>
				<th>이름</th>
				<th>연락처</th>
			</tr>
		</thead>
		<tbody>
			<%
			for (MemberVO vo : list2) {
			%>
			<tr>
				<td><%=vo.getMid()%></td>
				<td><%=vo.getName()%></td>
				<td><%=vo.getPhone()%></td>
			</tr>
			<%
			}
			%>
		</tbody>
	</table>

<%@include file="../layout/footer.jsp" %>