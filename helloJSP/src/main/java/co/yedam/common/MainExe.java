package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
//		List<ReplyVO> list = mapper.replyList(1);
//		list.forEach(vo -> System.out.println(vo));
		
		ReplyVO vo = mapper.selectReply(4);
		vo.setReply("수정되니?");
		vo.setReplyer("김재현");
		vo.setBoardNo(3);
		
		mapper.deleteReply(3);
		
		
	}
}
