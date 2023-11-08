package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.common.PageDTO;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyServiceImpl;
import co.yedam.reply.service.ReplyVO;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		//원본 글 아이디
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		page = page == null ? "1" : page;
		System.out.println("page는 " + page);
		ReplyService svc = new ReplyServiceImpl();
		PageDTO dto = new PageDTO(Integer.parseInt(bno),svc.getTotalCnt(Integer.parseInt(bno)),Integer.parseInt(page));
		
		//가져온 데이터를 제이슨 형태로 만들어줘야함.
		
		
		
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno),Integer.parseInt(page));
		
		//list와 dto를 gson.toJson의 파라미터로 넘기기 위해선 map이 좋다.
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("dto", dto);
		
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		
		// list의 값을 json으로 바꿈.
		String json = gson.toJson(map);
		resp.setContentType("text/json;charset=utf-8");
		try {
			resp.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
