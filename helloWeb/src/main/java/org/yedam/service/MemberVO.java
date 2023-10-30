package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//lombok 라이브러리를 설치하고 src => lib에 넣어서 어노테이션Data사용가능. => setter,getter,ToString등등을 만들어줌.

@Data
//모든 매개값을 가지고 있는 생성자를 만드는 어노테이션
@AllArgsConstructor
@NoArgsConstructor
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;	
}
