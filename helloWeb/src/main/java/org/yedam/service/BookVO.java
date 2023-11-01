package org.yedam.service;

<<<<<<< HEAD
public class BookVO {
	private String book_code;
	private String book_title;
	private String book_author;
	private String book_press;
	private int book_price;
	public String getBook_code() {
		return book_code;
	}
	public void setBook_code(String book_code) {
		this.book_code = book_code;
	}
	public String getBook_title() {
		return book_title;
	}
	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}
	public String getBook_author() {
		return book_author;
	}
	public void setBook_author(String book_author) {
		this.book_author = book_author;
	}
	public String getBook_press() {
		return book_press;
	}
	public void setBook_press(String book_press) {
		this.book_press = book_press;
	}
	public int getBook_price() {
		return book_price;
	}
	public void setBook_price(int book_price) {
		this.book_price = book_price;
	}

=======
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//lombok 사용한것임... 굳이 setter,getter,toString등 셋팅안해줘도 됨.
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookVO {
	private String bookCode;
	private String bookTitle;
	private String bookAuthor;
	private String bookPress;
	private int bookprice;
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
}
