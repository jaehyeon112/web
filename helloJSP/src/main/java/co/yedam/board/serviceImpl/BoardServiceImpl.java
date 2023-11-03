package co.yedam.board.serviceImpl;

import java.util.List;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;

public class BoardServiceImpl implements BoardService{
	BoardDAO dao = new BoardDAO();
	
	@Override
	public List<BoardVO> boardList() {
		return dao.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNO) {
		dao.updateCnt(boardNO);
		return dao.select(boardNO);
	}

	@Override
	public boolean addBoard(BoardVO vo) {
		return dao.insert(vo)==1;
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return dao.update(vo)==1;
	}

	@Override
	public boolean removeBoard(BoardVO vo) {
		return dao.delete(vo)==1;
	}

}
