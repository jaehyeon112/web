package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.MemberListControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;

public class FrontController extends HttpServlet {
				// command 인터페이스임
	Map<String, Command> map = new HashMap<>();
	// init 한번만 실행.. 그다음 service 실행
	@Override
	public void init(ServletConfig config) throws ServletException {
			//화면은 form, 실제처리는 board
			//메인 페이지
			map.put("/main.do", new MainControl());
			//로그인.
			map.put("/loginForm.do",new LoginFormControl());
			map.put("/login.do",new LoginControl());
			
			//회원관리
			map.put("/memberList.do", new MemberListControl());
			
			map.put("/logout.do", new LogoutControl());
			
			map.put("/boardList.do", new BoardListControl());
			map.put("/getBoard.do", new GetBoardControl());
			//등록화면. 
			map.put("/boardForm.do", new BoardFormControl());
			//처리
			map.put("/addBoard.do", new AddBoardControl());
			//수정
			map.put("/modifyForm.do", new ModifyFormControl());
			map.put("/modifyBoard.do", new ModifyBoardControl());
			//삭제
			map.put("/removeForm.do", new RemoveFormControl());
			map.put("/removeBoard.do", new RemoveBoardControl());
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//  요청 정보의 한글 인코딩 방식
		req.setCharacterEncoding("utf-8");
		System.out.println("*.do로 끝나면 FrontController 실행~");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do 
		String context = req.getServletContext().getContextPath(); // helloJSP
		String page = uri.substring(context.length());
		System.out.println("page : " + page);
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		System.out.println(controller);
		
	}
	
}
