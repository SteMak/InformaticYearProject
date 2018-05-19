const makeMedia = (count) => {
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
					<h5>Зміст</h5>
				</div>
			</div>
			<div class="row">
				<div class="col">
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
		<div class="col">
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
	} else if (count == 3) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 4) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 5) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 6) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 7) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 8) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 9) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 10) {
		document.getElementById('content').innerHTML =
			``;
	} else if (count == 11) {
		document.getElementById('content').innerHTML =
			``;
	} 
	
		document.getElementById('content').innerHTML = result;
}
