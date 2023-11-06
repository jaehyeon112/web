package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		BoardVO vo = new BoardVO();
		BoardService svc = new BoardServiceImpl();
		
		// 파라미터 활용 -> 데이터 수정 -> 목록이동.
		if(req.getMethod().equals("GET")) {
			
			String bno = req.getParameter("bno");
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String context = req.getParameter("context");
			String image = req.getParameter("images");
			
			vo.setBoardNo(Integer.parseInt(bno));
			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(context);
			vo.setImage(image);
			
		}else if(req.getMethod().equals("POST")) {
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5 * 1024 * 1024;
			
			
			try {
				MultipartRequest mr = new MultipartRequest(req,saveDir, size,"utf-8",new DefaultFileRenamePolicy());
				String bno = mr.getParameter("bno");
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String image = mr.getFilesystemName("images");
				
				vo.setBoardNo(Integer.parseInt(bno));
				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setContent(content);
				vo.setImage(image);
				
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}
		
		if(svc.editBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				resp.sendRedirect("modifyBoard.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		

	}

}
