package co.yedam.common;

public class PageDTO {
	int total; // 전체건수
	int currentPage; // 현재 페이지
	boolean next, prev; // 이전 or 이후 페이지가 존재하는지의 여부..
	int startPage, endPage; // 시작과 끝 페이지
	int boardNo; // 어떤 긆에 대한 페이지 정보인가
	
	
	// 11page 13page ~ 20page 총 258건, 총 52페이지가 되겠음. 댓글은 5개씩 보여주고, 보여지는 버튼은 10개씩 보여질것임.
	public PageDTO(int boardNo,int total,int currentPage) {
		
		this.boardNo = boardNo;
		this.total = total;
		this.currentPage = currentPage;
		
		// 댓글의 총 갯수를 5로 나누고, 거기에 올림..
		int realEnd = (int)Math.ceil(total / 5.0);
		
		// 보여지는 페이지 버튼 수 /10으로 나눈것보다 1개 더 많을 수 있게 하기 위해..
		this.endPage = (int)Math.ceil(currentPage / 10.0)*10;
		this.startPage = endPage-9;
		this.startPage = startPage < 1 ? 1 : endPage-9 ;
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd; 
	}
	
	/*
	 * public pagedto(int boardNo, int total, int currentPage){
	 * 	this.
	 * tihs.i
	 * itis
	 * 
	 * 
	 * 	}
	 * 
	 */
	
	
}
