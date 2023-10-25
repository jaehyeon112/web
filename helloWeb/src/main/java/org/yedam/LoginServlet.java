package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		Map<String, Integer> map = new HashMap<>();
		map.put("홍길동", 90);
		map.put("김재현", 100);
		map.put("똥길동", 50);

		Set<String> keySet = map.keySet(); //

		response.setCharacterEncoding("UTF-8"); // 한글이 꺠지지 않게 하는 메서드
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter(); // 출력스트림 응답하면 처리된 결과를 서버가 보여주는...

		out.print("톰캣을 재시작을 해야지 바뀐 내용이 적용됩니다...");
		out.print("<br>");
		out.print("<h3>학생이름과 점수</h3>");

		// out.print("<table border='1'><thead><tr>");
		// out.print("<th>학생이름</th><th>점수</th>");
		String str = "<table border ='1'><thead><tr>";
		str += "<th>학생이름</th><th>점수</th>";
		str += "<tbody>";
		for (String item : keySet) {
			str += "<tr><td>" + item + "</td><td>" + map.get(item) + "</td></tr>";
		}
		str += "</tbody></table>";
		out.print(str);

		out.print("<br><a href='index.html'>첫페이지</a>"); // 위에 contentType이 html이므로..작성해도 인식함.
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
