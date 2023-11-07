package co.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		SqlSession session = DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);
		
		if(mapper.deleteReply(11)==1) {
			System.out.println("성공!");
		}else {
			System.out.println("실패");
		}
		
		;
	
		
	}
}
