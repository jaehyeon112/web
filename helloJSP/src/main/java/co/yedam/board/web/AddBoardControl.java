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

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		BoardVO vo = new BoardVO();
		if (req.getMethod().equals("GET")) {

			// 제목, 내용, 작성자
			String title = req.getParameter("title");
			String content = req.getParameter("content");
			String writer = req.getParameter("writer");

			vo.setTitle(title);
			vo.setContent(content);
			vo.setWriter(writer);

		} else if (req.getMethod().equals("POST")) {
			// multipartRequest mr;
			// 총 5개를 생성자로 넘겨줘야함
			// 1.요청정보, 2.저장경로, 3.최대업로드 크기, 4.인코딩방식 , 5.서버에 동일한파일이 있다면 똑같은 파일을 어떻게 이름을 지을건지에
			// 대한 네임정책
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5 * 1024 * 1024;
			try {
				MultipartRequest mr = new MultipartRequest(req, saveDir, size, "UTF-8", new DefaultFileRenamePolicy());
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");

				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setContent(content);
				vo.setImage(img);

			} catch (IOException e) {
				e.printStackTrace();
			}

		} // end of if

		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) {
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("boardForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}// end of execute.
}
