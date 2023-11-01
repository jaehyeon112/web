package org.yedam.service;

<<<<<<< HEAD


public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
	
	public MemberVO() {
		// TODO Auto-generated constructor stub
	}
	public MemberVO(String mid,String pass,String name, String phone) {
		this.mid = mid;
		this.pass = pass;
		this.name = name;
		this.phone = phone;
	}
	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
=======
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
>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
}
