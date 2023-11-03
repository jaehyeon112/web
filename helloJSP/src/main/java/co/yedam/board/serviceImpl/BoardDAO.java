package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;

public class BoardDAO {
	// 목록, 단건조회, 등록, 수정, 삭제:
	DataSource dao = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;

	public List<BoardVO> selectList() {
		List<BoardVO> list = new ArrayList<>();
		SimpleDateFormat sdf = new SimpleDateFormat("yy-MM-dd"); 
		sql = "select * from board order by board_no";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("Board_NO"));
				vo.setContent(rs.getString("Content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWirteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
				list.add(vo);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return list;
	}
	
	public BoardVO select(int boardNO) {
		BoardVO vo = new BoardVO();
		sql = "select * from board where board_no = " + boardNO;
		
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo.setBoardNo(rs.getInt("Board_NO"));
				vo.setContent(rs.getString("Content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setWirteDate(rs.getDate("write_date"));
				vo.setWriter(rs.getString("writer"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return vo;
	}
	
	
	public int insert(BoardVO vo) {
		sql = "insert into board(board_no,title,content,writer,image) values(seq_board.nextval, ?,?,?,?)";
		conn = dao.getConnection();
		int num = 0;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getImage());
			num = psmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return num;
	}
	
	
	public int update(BoardVO vo) {
		int n = 0;
		sql = "update board set title = ?, content = ? , image = nvl(?,image) , last_update = sysdate where Board_no = ? and writer = ?";
		conn= dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			psmt.setInt(4, vo.getBoardNo());
			psmt.setString(5, vo.getWriter());
			n = psmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		
		return n;
	}
	public int delete(BoardVO vo) {
		int n = 0;
		sql = "delete from board where Board_no = ? and writer = ? ";
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, vo.getBoardNo());
			psmt.setString(2, vo.getWriter());
			psmt.executeUpdate();
			return n;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	//조회수 증가
	public int updateCnt(int boardNo) {
		int n = 0;
		sql = "update board set view_cnt = view_cnt+1 where board_no = " + boardNo;
		conn = dao.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.executeUpdate();
			return n;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		
		return 0;
	}
	
	
	public void close() {
		try {
			if (rs != null)
				rs.close();
			if (psmt != null)
				psmt.close();
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
