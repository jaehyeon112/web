package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FirstServlet
 */
//@WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	// 라이프사이클
	// init(최초실행) -> service(실행) -> destroy(종료)
	
	private static final long serialVersionUID = 1L;
       
    public FirstServlet() {
        super();
    }

    
    // service가 없으면 get,post방식으로 나타나지만..
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	System.out.println("service실행");
    	doGet(req,resp);
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for(int i = 0 ; i < 5 ; i++) {
			// 출력 스트림이다~
			response.getWriter().print("<p>"+ i +"번째 이름은 "+ name +" 나이는 " + age + "살 먹었습니다.</p>");
		}
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
