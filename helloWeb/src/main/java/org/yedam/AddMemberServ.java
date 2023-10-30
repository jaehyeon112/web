package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.serviceImpl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
// ? 뒤에는 파라미터 값임
///AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9876-0987
@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//요청값 처리 request , 응답값처리는 response
		//웹페이지에다가 값을 넘기고 싶으면...
		//?mid=M009&pass=9999&name=Kim&phone=010-9876-0987
		//서블릿 주소에서는 &를 기준으로 넘긴다..? 메소드에서 (mid,pass,name,phone) {mid = ...} 와 같이 쓰는것처럼 키=밸류.. 
		String mid = request.getParameter("mid"); // M009를 받아오겠다는 의미
		String pass = request.getParameter("pass"); 
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		//멤버 인스턴스 선언
		MemberVO vo = new MemberVO(mid, pass, name, phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		
		//gson 라이브러리 활용법
		Gson gson = new GsonBuilder().create();
		//String json = gson.toJson(vo); // 자바객체를 넣어줘도 알아서 문자열로 변환시켜줌
		
		// map
		Map<String, Object> map = new HashMap<>();
		
		
		// 정상적으로 입력이 되면 boolean 타입으로 반환해줌 그걸 콘솔창에서 확인하기 위함임...
		if(svc.addMember(vo)) {
			// {"retCode" : "OK" } 와 같이 json 문자열타입으로 넣어줄것임
			//out.print(json);
			map.put("retCode", "OK");
			map.put("VO", vo);
		}else {
			// {"retCode" : "NG" }
			//out.print(json);
			map.put("retCode", "NG");
			map.put("VO", vo.getMid());
		}
		String json = gson.toJson(map);
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
