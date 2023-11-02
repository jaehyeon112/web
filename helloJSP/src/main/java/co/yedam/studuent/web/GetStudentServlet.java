package co.yedam.studuent.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.studuent.service.StudentService;
import co.yedam.studuent.service.StudentVO;
import co.yedam.studuent.serviceImpl.StudentServiceImpl;

@WebServlet("/getStudent.do")
public class GetStudentServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  req.setCharacterEncoding("utf-8");
	  resp.setContentType("text/json;charset=utf-8");
	  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
	  StudentVO vo = new StudentVO();
	  StudentService svc = new StudentServiceImpl();
	  String id = req.getParameter("id");
	  vo = svc.getStudent(id);
	  System.out.println(vo);	  
	  Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(vo);
		PrintWriter out = resp.getWriter();
		out.println(json);
	  
	}
	  
	
	
}
