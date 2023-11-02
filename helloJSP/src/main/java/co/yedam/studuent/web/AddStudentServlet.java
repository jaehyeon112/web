package co.yedam.studuent.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.studuent.service.StudentService;
import co.yedam.studuent.service.StudentVO;
import co.yedam.studuent.serviceImpl.StudentServiceImpl;

@WebServlet("/AddStudentServlet.do")
public class AddStudentServlet extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("utf-8");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		StudentVO vo = new StudentVO();
		
		vo.setStudentId(req.getParameter("id"));
		vo.setStudentName(req.getParameter("name"));
		vo.setStudentPassword(req.getParameter("pass"));
		vo.setStudentDept(req.getParameter("major"));
		try {
			vo.setStudentBirthday(sdf.parse(req.getParameter("birth")));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(vo);
		
		
		
		
		StudentService svc = new StudentServiceImpl();
		if(svc.addStudent(vo)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		}else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
	}
}
