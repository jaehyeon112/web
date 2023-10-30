package org.yedam.service;

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
}
