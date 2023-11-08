package co.yedam.reply.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {
	//목록,단건,추가,수정,삭제
	
	public List<ReplyVO> replyList(int boardNo, int page); //목록
	public List<Map<String, Object>> getReplyCountByWriter(); //목록
	public ReplyVO getReply(int replyNo); //단건조회
	public boolean addReply(ReplyVO vo); //등록
	public boolean editReply(ReplyVO vo); //수정
	public boolean delReply(int replyNo); //삭제
	
	//댓글 건수
	public int getTotalCnt(int boardNo);
	
}
