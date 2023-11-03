// service.js

export default {
	// 목록처리. 매개 값을 두개 받음. 패치가 성공시, 실패시
	async studentList(successCallback, errorCallback) {
		let req = await fetch('../studentList.do');
		let json = await req.json() // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
		try {
			successCallback(json)
		} catch (err) {
			errorCallback(err);
		}
	},
	// 단건조회.
	async getStudent(id, successCallback, errorCallback) {
		let req = await fetch(`../getStudent.do?id=${id}`);
		let json = await req.json() // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
		try {
			successCallback(json)
		} catch (err) {
			errorCallback(err);
		}

	},

	// 등록
	async addStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../AddStudentServlet.do', optObj);
		let json = await req.json() // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
		try {
			successCallback(json)
		} catch (err) {
			errorCallback(err);
		}
	},

	// 수정
	async editStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../editStudent.do', optObj);
		let json = await req.json() // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
		try {
			successCallback(json)
		} catch (err) {
			errorCallback(err);
		}

	},

	// 삭제
	async removeStudent(id, successCallback, errorCallback) {
		let req = await fetch('../delStudent.do?sid=' + id);
		let json = await req.json() // .json()은 {"retCode" : "OK"} 와 같은 json문자열을 -> {retCode:"OK"} 와 같이 객체로 바꿈.
		try {
			successCallback(json)
		} catch (err) {
			errorCallback(err);
		}

	}
}