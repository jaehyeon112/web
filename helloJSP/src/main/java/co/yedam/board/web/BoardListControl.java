package co.yedam.board.web;

import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		// 서블릿, jsp 기능은 서로 같으나 역할을 분리함.
		// 서블릿(데이터를 처리하는 controller) , jsp(보여주기만 하는 view의 역할)
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		
		// 요청에 list라는 값을 넘기기 위해 setAttriㅠㅕㅅ
		req.setAttribute("list", list);
		
		// 원래는 클라이언트가 boardList.do를 요청했으나, servlet에서 데이터 처리 후에 jsp로 요청을 재지정해줘야함
		// 이동할 페이지 정보를 요청을 재지정해서 jsp에 넘겨줘야함.. forward 메서드로!
		RequestDispatcher rd =  req.getRequestDispatcher("WEB-INF/board/boardList.jsp");
		try {
			// forward 할때 받은 인자값을 그대로 다시 전달하고 있음.
			rd.forward(req, resp);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
