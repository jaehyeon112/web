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
import co.yedam.reply.web.AddReplyControl;
import co.yedam.reply.web.DelReplyControl;
import co.yedam.reply.web.ReplyListControl;

// 프론트 컨트롤러임.
public class FrontController extends HttpServlet {
				// command 인터페이스임
	Map<String, Command> map = new HashMap<>();
	// init 한번만 실행.. 그다음 service 실행
	@Override
	public void init(ServletConfig config) throws ServletException {
			//forward와 redirection의 차이
			//forward내부적인 페이지 전환 및 로직처리에 사용, url이 유지되어 유저는 이동한 페이지를 직접 볼 수 없음. ex)로그인 후 환영 페이지로 전환 등..
			//redirection외부 페이지로 사용자를 보내거나 다른 서버로 사용자를 전달할 떄 사용. 이동한 url을 볼 수 있음. ex)결제 완료 후 주문 확인 페이지로 이동..등
		
			//화면은 form, 실제처리는 board
			//메인 페이지로 가게끔 함.
			map.put("/main.do", new MainControl());
			
			// loginForm.jsp로 이동시킴.
			map.put("/loginForm.do",new LoginFormControl());
			
			//로그인을 하기위해 id와 passward 체크 , memberVO의 res값이 Admin인지도 체크,
			//session.setAttribute를 통해 id값과 admin을 넣어둠.
			map.put("/login.do",new LoginControl());
			
			//회원관리메뉴를 누르면 -> 멤버들 전체조회 후 memberlist.jsp로 이동
			//멤버 조회한 값을 req.setAtrribute로 넘겨서 jsp에서 활용함.
			map.put("/memberList.do", new MemberListControl());
			
			//메뉴에 session.getAtrribute(logId)를 기준으로 있으면 로그아웃이 보인다.
			//누르면=> 로그아웃할수있도록 invalidate() 으로 세션객체 지운후 main.do로 이동
			map.put("/logout.do", new LogoutControl());
			
			//게시글목록을 누르면 실행 -> 전체 조회 후 list에 담아 setAtrribute로 list를 저장 후 boardList.jsp로 이동
			map.put("/boardList.do", new BoardListControl());
			
			//게시글을 눌렀을때, a태그(get)href에 bno를 읽고 그에 해당하는 vo의 값을 얻은 뒤 setAttribute로 보관후 getBoard.jsp로.
			map.put("/getBoard.do", new GetBoardControl());
			
			//로그인이 되었으면 boardForm.jsp로 이동시킴. 글 등록할 수 있는 페이지로 이동시키는것, 로그인이 아니면 로그인 페이지로 이동시킴.
			map.put("/boardForm.do", new BoardFormControl());
			
			
			//처리
			//boardForm.jsp의 action, 누르면 boardForm에서 나온 값을 가지고 처리함(게시글 등록)
			map.put("/addBoard.do", new AddBoardControl());
			
			
			//수정
			//getBoard.jsp의 action, 글번호를 받고, BoradVO와 연결시켜 modifyForm.jsp로 이동시킴.
			map.put("/modifyForm.do", new ModifyFormControl());
			//modifyBoard.jsp의 action, 실질적으로 데이터를 처리해서 db에 수정시킴.
			map.put("/modifyBoard.do", new ModifyBoardControl());
			
			
			//삭제
			map.put("/removeForm.do", new RemoveFormControl());
			map.put("/removeBoard.do", new RemoveBoardControl());
			
			//댓글 목록 json형태로 목록을 가져오게함.
			map.put("/replyList.do", new ReplyListControl());
			map.put("/addReply.do", new AddReplyControl());
			map.put("/delReply.do", new DelReplyControl());
			
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
