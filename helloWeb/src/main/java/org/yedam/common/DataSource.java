package org.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

<<<<<<< HEAD
public class DataSource {
	//싱글톤 클래스  DAO객체
	private static DataSource dataSource = new DataSource();
	
	private DataSource() {
		
	}
	
	private static String driver = "oracle.jdbc.OracleDriver";
	private static String url = "jdbc:oracle:thin:@localhost:1521:xe";
	private static String user = "hr";
	private static String password = "1234";
	
	private static Connection conn;
	
	
	public static DataSource getInstance() {
		return dataSource;
	}
	
	public Connection getConnection() {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url,user,password);
//			System.out.println("DB 연결성공 ~~~~~~~~~");
		}catch(ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}
=======
// DAO는 관례적으로 DataSource라고 함.
// 싱글톤 클래스 : 내 클래스 안에서 나의 인스턴스와 생성자를 private로 만들고 가져다 쓸 수 있게 메서드를 getInstance로 만들어서 사용하게 만듦  
// DAO객체임
public class DataSource { 
	private static DataSource dataSource = new DataSource();
	private DataSource() {}
	
	// DAO가 필요한것 메서드가 static이므로 필드값도 static으로 설정
	private static String driver = "oracle.jdbc.driver.OracleDriver";
	private static String url = "jdbc:oracle:thin:@localhost:1521:XE";
	private static String user = "hr";
	private static String password = "1234";
	
	private static Connection conn;
	
	public static DataSource getInstance() {
		return dataSource;
	}
	
	public Connection getConnection() {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url,user,password);
		}catch(ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} // 드라이브를 못 찾을 때 
		
		return conn;
		
	}
	

>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
}
