package co.yedam.reply.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyServiceImpl;

public class DelReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String replyNo = req.getParameter("replyNo");
		System.out.println("이게뭐야!!!"+replyNo);
		ReplyService svc = new ReplyServiceImpl();
		
		
		if(svc.delReply(Integer.parseInt(replyNo))){
			System.out.println("성공?");
			try {
				req.getRequestDispatcher("WEB-INF/board/getBoard.jsp").forward(req, resp);
			} catch (ServletException | IOException e) {
				e.printStackTrace();
			}
		}else {
			System.out.println("실패..");
		}
		
		
	}
	
}
