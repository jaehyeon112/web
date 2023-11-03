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

public class FrontController extends HttpServlet {
				// command 인터페이스임
	Map<String, Command> map = new HashMap<>();
	// init 한번만 실행.. 그다음 service 실행
	@Override
	public void init(ServletConfig config) throws ServletException {
			map.put("/boardList.do", new BoardListControl());
			map.put("/getBoard.do", new GetBoardControl());
			//등록화면. 
			map.put("/boardForm.do", new BoardFormControl());
			//처리
			map.put("/addBoard.do", new AddBoardControl());
		
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
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
