package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

<<<<<<< HEAD
import org.yedam.serivce.Impl.BookServiceImpl;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BookListServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService bs = new BookServiceImpl();
		List<BookVO> list = bs.booklist();
		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		String str = "[";
		int count = 0;
		for(BookVO vo:list) {
			str += "{";
			str += "\"book_code\":\""+vo.getBook_code()+"\",";
			str += "\"book_title\":\""+vo.getBook_title()+"\",";
			str += "\"book_author\":\""+vo.getBook_author()+"\",";
			str += "\"book_press\":\""+vo.getBook_press()+"\",";
			str += "\"book_price\":\""+vo.getBook_price()+"\"";
			str += "}";
			if(++count != list.size()) {
				str += ",";
			}
		}
		str += "]";
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
=======
import org.yedam.service.BookService;
import org.yedam.service.BookVO;
import org.yedam.service.serviceImpl.BookServiceImpl;

/**
 * Servlet implementation class BookListServlet
 */

// 서블릿의 경로, 딱히 바꿀 필요 없어서 손 안댐.
@WebServlet("/BookListServlet")
public class BookListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public BookListServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// bookList메서드를 사용하기 위해 변수 생성
		BookService book = new BookServiceImpl();
		// booklist메서드에 반환타입에 맞는 list 변수를 선언.
		List<BookVO> list = book.BookList();
		// contentType헤더를 맞춰줌.. 한글깨짐 방지임.. (* 여러가지 HTTP 헤더들을 공부해야할듯...)
		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		//list에 담겨있는 값들을 json 타입으로 변환시킴 
		String str = "[";
		// 마지막 , 을 구분하기 위한 cnt 변수 선언.
		int cnt = 0;
		for(BookVO vo : list) {
			str += "{";
			str += "\"book_code\":\""+ vo.getBookCode() + "\",";
			str += "\"book_title\":\""+ vo.getBookTitle() + "\",";
			str += "\"book_author\":\""+ vo.getBookAuthor() + "\",";
			str += "\"book_press\":\""+ vo.getBookPress() + "\",";
			str += "\"book_price\":\""+ vo.getBookprice() + "\"";
			str += "}";
			if(++cnt != list.size()) {
				str += ",";
			}
		}
		str += "]";
		out.print(str);
		
		
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
