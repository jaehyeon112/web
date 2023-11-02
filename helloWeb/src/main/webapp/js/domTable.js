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


