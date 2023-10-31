// domTable.js


export default {
	//매개 값으로 배열을 받음.
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
		for (let prop in center) {
			let td = document.createElement('td');
			td.innerHTML = center[prop];
			tr.append(td);
		}
		return tr;
	}

	}


