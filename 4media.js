const makeMedia = (count) => {
	let big = document.getElementById('content').clientWidth >= 510;
	let k = big ? document.getElementById('content').clientWidth/2-15: document.getElementById('content').clientWidth;
	let result = 
		`<div class="row">
			<div class="col">
				<h4>Презентація, сторінка №${count + 1}/12</h4>
			</div>
		</div>`;
	if (count == 0) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Презентація з Проекту "Інформатика у дев'ятому класі"</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/0.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/0.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 1) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h3>Зміст</h3>
				</div>
			</div>
			<div class="row">
				<div class="prez col">
					<button type="button" class="btn content-btn" onclick="makeMedia(2)">Розділ 1: Інформаційні технології у суспільстві</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(3)">Розділ 2: Мережеві технології</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(4)">Розділ 3: Комп’ютерні презентації</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(5)">Розділ 4: Основи інформаційної безпеки</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(6)">Розділ 5: Комп’ютерне моделювання</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(7)">Розділ 6: Табличні величини та алгоритми їх опрацювання</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(8)">Розділ 7: Комп’ютерні публікації</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(9)">Розділ 8:Комп’ютерна графіка. Векторний графічний редактор</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(10)">Розділ 9: Створення навчального персонального середовища</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(11)">Розділ 10: Розв’язування комп’ютерних задач</button>					
				</div>
			</div>`;
	} else if (count == 2) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 1: Інформаційні технології у суспільстві</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/2.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/2.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 3) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 2: Мережеві технології</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/3.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/3.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 4) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 3: Комп’ютерні презентації</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/4.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/4.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 5) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 4: Основи інформаційної безпеки</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/5.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/5.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 6) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 5: Комп’ютерне моделювання</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/6.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/6.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 7) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 6: Табличні величини та алгоритми їх опрацювання</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/7.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/7.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 8) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 7: Комп’ютерні публікації</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/8.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/8.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 9) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 8:Комп’ютерна графіка. Векторний графічний редактор</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/9.1.jpg" width="${k}" height="${k}">
				</div>
				<div class="prez ${big ? 'col-6': 'col-12'}">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/9.2.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 10) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 9: Створення навчального персонального середовища</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez col-12">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/10.1.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} else if (count == 11) {
		result +=
			`<div class="row">
				<div class="col text-left">
					<h5>Розділ 10: Розв’язування комп’ютерних задач</h5>
				</div>
			</div>
			<div class="row">
				<div class="prez col-12">
					<img style="-webkit-user-select: none;cursor: zoom-in;" src="prez/11.1.jpg" width="${k}" height="${k}">
				</div>
			</div>`;
	} 

	result += `
		<div class="row">
			${count == 0 ? 
				`<div class="col menu-col-left">
					<button type="button" class="btn content-btn" onclick="makeMedia(1)">Зміст</button>				
				</div>
				<div class="col menu-col-right">
					<button type="button" class="btn content-btn menu-col-right" onclick="makeMedia(${count+1})">Наступна</button>				
				</div>`: count == 11 ? 
					`<div class="col menu-col-left">
						<button type="button" class="btn content-btn" onclick="makeMedia(${count-1})">Попередня</button>				
					</div>
					<div class="col menu-col-right">
						<button type="button" class="btn content-btn" onclick="makeMedia(1)">Зміст</button>				
					</div>`:
						`<div class="col menu-col-left">
							<button type="button" class="btn content-btn" onclick="makeMedia(${count-1})">Попередня</button>				
						</div>
						<div class="col menu-col-center">
							<button type="button" class="btn content-btn" onclick="makeMedia(1)">Зміст</button>				
						</div>
						<div class="col menu-col-right">
							<button type="button" class="btn content-btn" onclick="makeMedia(${count+1})">Наступна</button>				
						</div>`}
		</div>`
	
		document.getElementById('content').innerHTML = result;
}
