const today = new Date();
		console.log(`오늘날짜 : ${today.getDate()}일`)
		let todayDate = today.getDate();
		const calendar = {
			week: ['일', '월', '화', '수', '목', '금', '토'],



			makeHead() {
				let str = `<thead><tr>`
				for (let a of this.week) {
					str += `<th>${a}</th>`
				}
				str += `</tr></thead>`
				return str;
			},

			makeBody() {
				let str = `<tbody><tr>`
				for (let i = 1; i <= 31; i++) {
					if (i == todayDate) {
						str += `<td style="background-color:yellow; font-weight:700">${i}</td>`
					} else {
						if (i % 7 == 1) {
							str += `<td style = "color:red">${i}</td>`
						} else {
							if (i % 7 == 0) {
								str+= `<td style="color:blue">${i}</td>`
								str += `<tr></tr>`
							}else{
								str += `<td>${i}</td>`
							}
						}
					}

				}
				str += `</tr></tbody>`
				return str;
			},
			makeCalender() {
				let str = `<table border="1">`
				str += this.makeHead()
				str += this.makeBody()
				str += `</table>`
				document.getElementById('show').innerHTML = str;
			}
		}
		calendar.makeCalender();
		
		export{calendar}