package co.yedam.common;

import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardDAO;

public class MainExe {
	public static void main(String[] args) {
		
		
		BoardDAO dao = new BoardDAO();
		List<MemberVO> list = new ArrayList<>();
		list = dao.listUser();
		System.out.println(list);
		
		
		
	}
}
