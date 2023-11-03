package co.yedam.common;

import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardDAO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MainExe {
	public static void main(String[] args) {
		
		BoardVO vo = new BoardVO();
		vo.setTitle("다시다시다시다");
		vo.setWriter("user01");
		vo.setImage(null);
		vo.setContent("되네 ㅡㅡ.");
		vo.setBoardNo(1);
		
		BoardService bsv = new BoardServiceImpl();
		BoardDAO dao = new BoardDAO();
		List<BoardVO> list = new ArrayList<>();
		list = dao.selectList();
		System.out.println(dao.update(vo));
		
		
		
	}
}
