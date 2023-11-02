<<<<<<< HEAD
/**
 * domTable.js
 */

export default {
	hiddenFields:['lat','lng'],
	makeHead: function(titles = ['주소', '센터명']) {
		//thead>tr>th*n
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(title => {
			let th = document.createElement('th');
			th.innerHTML = title;
			tr.append(th);
		})
		thead.append(tr);
		return thead;
	},
	makeBody: function(dataAry = []) {
		let tbody = document.createElement('tbody');
		tbody.setAttribute('style', 'text-align : center')
		dataAry.forEach(item => {
			tbody.append(this.makeTr(item));
		})
		return tbody;
	},
	makeTr: function(center = {}) {
		let tr = document.createElement('tr');arguments
		tr.setAttribute('data-lat',center.lat);		// 숨긴 데이터 값을 다시 담아줌	//tr.dataset.lat
		tr.setAttribute('data-lng',center.lng);	
		for (let prop in center) {
			if(this.hiddenFields.indexOf(prop)>-1){
				continue;		//위도와 경도 값 숨기기
			}
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}
}
=======
// domTable.js


export default {
	//매개 값으로 배열을 받음.
	hiddenField: ['lat','lng'],
	makeHead: function(titles = ['아이디', '센터명']) {
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		titles.forEach(ele => {
			let th = document.createElement('th');
			th.innerHTML = ele;
			tr.append(th);
		})
		thead.append(tr);
		return thead;

	},
	makeBody: function(dataAry = []) {
		let tbody = document.createElement('tbody');
		dataAry.forEach(ele => {
			tbody.append(this.makeTr(ele))
		})
		return tbody;
		
	},
	
	makeTr: function(center = {}) {
		let tr = document.createElement('tr')
		tr.setAttribute('data-lat',center.lat) // tr.dataset라는 객체가 관리하게 됨. 그래서 tr.dataset.lat => lat값을 가져오게됨
		tr.setAttribute('data-lng',center.lng) // 이하 동문
		
		for (let prop in center) {
			if(this.hiddenField.indexOf(prop) > -1){
				continue;
			}
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}

	}


>>>>>>> branch 'master' of https://github.com/jaehyeon112/web.git
