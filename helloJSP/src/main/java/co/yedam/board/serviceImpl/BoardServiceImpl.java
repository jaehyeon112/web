package co.yedam.board.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.mapper.BoardMapper;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.common.DataSourceMybatis;

public class BoardServiceImpl implements BoardService {
	BoardDAO dao = new BoardDAO();

	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	//인터페이스									실행시점의 인스턴스를 가져오기 위해서..
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
	
	@Override
	public List<BoardVO> boardList() {
		return mapper.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNO) {
		mapper.updateCnt(boardNO);
		return mapper.select(boardNO);
	//	dao.updateCnt(boardNO);
	//	return dao.select(boardNO);
	}

	@Override
	public boolean addBoard(BoardVO vo) {
		return mapper.insert(vo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return mapper.update(vo) == 1;
	}

	@Override
	public boolean removeBoard(BoardVO vo) {
		return mapper.delete(vo) == 1;
	}

	@Override
	public MemberVO loginCheck(String id, String pw) {

		return mapper.getUser(id, pw);
	}

	@Override
	public List<MemberVO> memberList() {
		return mapper.memberList();
	}

	@Override
	public MemberVO resCheck() {
		return dao.adminCheck();
	}
}
