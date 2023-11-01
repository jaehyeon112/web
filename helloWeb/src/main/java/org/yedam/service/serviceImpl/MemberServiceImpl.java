package org.yedam.service.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;

public class MemberServiceImpl implements MemberService {

	public DataSource data = DataSource.getInstance();
	public Connection conn;
	public PreparedStatement psmt;
	
	@Override
	public List<MemberVO> memberList() {
		List<MemberVO> list = new ArrayList<>();
		String sql = "select * from member";
		try {
			conn = data.getConnection();
			psmt = conn.prepareStatement(sql);
			ResultSet rs = psmt.executeQuery();
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setPass(rs.getString("pass"));
				vo.setName(rs.getString("name"));
				vo.setPhone(rs.getString("phone"));
				list.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {

			if (psmt != null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

		}
		return list;
	}


	@Override
	public boolean addMember(MemberVO vo) {
		String sql = "insert into member values(?,?,?,?)";		
		try(Connection conn = data.getConnection();
			PreparedStatement psmt = conn.prepareStatement(sql)){			
			psmt.setString(1, vo.getMid());
			psmt.setString(2, vo.getPass());
			psmt.setString(3, vo.getName());
			psmt.setString(4, vo.getPhone());
			int r = psmt.executeUpdate(); // 반환값은 데이터처리 건수.
			if(r==1) {
				return true;
			}
		}  catch (SQLException e) {
			e.printStackTrace();
		}finally {

		}
		
		
		return false;
	}


	@Override
	public boolean modMember(MemberVO vo) {
		String sql = "update member set pass=?, name=?, phone=? where mid=?";
		
		try(Connection conn = data.getConnection();
			PreparedStatement psmt = conn.prepareStatement(sql)){
			psmt.setString(1, vo.getPass());
			psmt.setString(2, vo.getName());
			psmt.setString(3, vo.getPhone());
			psmt.setString(4, vo.getMid());
			int r = psmt.executeUpdate();
			if(r==1) {
				return true;
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {

		}
		
		return false;
	}

}
