package co.yedam.reply.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.common.DataSourceMybatis;
import co.yedam.reply.mapper.ReplyMapper;


public class ReplyServiceImpl implements ReplyService {
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	//인터페이스									실행시점의 인스턴스를 가져오기 위해서..
	ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
	
	
	@Override
	public List<ReplyVO> replyList(int boardNo) {
		
		return mapper.replyList(boardNo);
	}

	@Override
	public ReplyVO getReply(int replyNo) {
		return mapper.selectReply(replyNo);
	}

	@Override
	public boolean addReply(ReplyVO vo) {
		return mapper.insertReply(vo)==1;
	}

	@Override
	public boolean editReply(ReplyVO vo) {
		return mapper.updateReply(vo)==1;
	}

	@Override
	public boolean delReply(int replyNo) {
		return mapper.deleteReply(replyNo)==1;
	}

	
	
}
