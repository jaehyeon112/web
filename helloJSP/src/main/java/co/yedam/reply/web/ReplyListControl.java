package co.yedam.reply.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyServiceImpl;
import co.yedam.reply.service.ReplyVO;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//원본 글 아이디
		String bno = req.getParameter("bno");
		
		ReplyService svc = new ReplyServiceImpl();
		//가져온 데이터를 제이슨 형태로 만들어줘야함.
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno));
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		// list의 값을 json으로 바꿈.
		String json = gson.toJson(list);
		resp.setContentType("text/json;charset=utf-8");
		try {
			resp.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
