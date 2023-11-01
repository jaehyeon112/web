package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService {
	private DataSource data = DataSource.getInstance();
	
	// VO 객체에 전체조회(select)를 하여 값을 ArrayList에 담기 위한 메서드.
	// List<BookVO> 타입으로 반환함.
	@Override
	public List<BookVO> BookList() {
		List<BookVO> list = new ArrayList<>();
		String sql = "select * from Book";
		
		// try-with-resource로 close()없어도 리소스 누수나 메모리 누수 없음.
		try(Connection conn = data.getConnection();
			PreparedStatement psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery()){
			while(rs.next()) {
				BookVO vo = new BookVO();
				vo.setBookCode(rs.getString("book_code"));
				vo.setBookTitle(rs.getString("book_title"));
				vo.setBookAuthor(rs.getString("book_author"));
				vo.setBookPress(rs.getString("book_press"));
				vo.setBookprice(rs.getInt("book_price"));
				list.add(vo);
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

}
