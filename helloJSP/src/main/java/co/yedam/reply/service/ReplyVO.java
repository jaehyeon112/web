package co.yedam.reply.service;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReplyVO {

	private int replyNo;
	private int boardNo;
	private String reply;
	private String replyer;
	private Date replyDate;
	private int rn;
}
