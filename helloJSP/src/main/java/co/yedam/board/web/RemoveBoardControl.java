package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		BoardVO vo = new BoardVO();
		BoardService svc = new BoardServiceImpl();
		
		if(req.getMethod().equals("GET")) {
			
			
			String bno = req.getParameter("bno");
			System.out.println("asdfasdfasdfs " + bno);
			vo.setBoardNo(Integer.parseInt(bno));
			
			
		}else if(req.getMethod().equals("POST")) {
			String bno = req.getParameter("bno");
			System.out.println("asdfasdfasdfs " + bno);
			vo.setBoardNo(Integer.parseInt(bno));
		}
	
		if(svc.removeBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("removeBoard.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

}
