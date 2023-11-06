package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		//웹 브라우저를 닫지 않는 한 session 가지고 있음.
		
		BoardService svc = new BoardServiceImpl();
		MemberVO vo = svc.resCheck();
		HttpSession session = req.getSession();
		if(vo.getMid().equals(id)) {
			session.setAttribute("admin", "admin");
		}
		if(svc.loginCheck(id,pw)) {
			session.setAttribute("logId", id);
			
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		
		
		
	}

}
