document.addEventListener("DOMContentLoaded", function(event) {
	newContent('main');
	newHeader();
});

function reuest(url) {
	let result = [];
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status == 200) {
		result = JSON.parse(xhr.responseText);
	}

	return result;
};

const testData = reuest('tests.json');

const newHeader = () => {
	if (document.getElementsByClassName('no-touchevents').length > 0) {
		document.getElementById('menu').innerHTML = 
			`<div class="row">
				<h1 class="col-lg-12 col-md-12 col-sm-12 masthead-brand">Проект "ІДК"</h1>
				<h3 class="col-lg-12 col-md-12 col-sm-12">(інформатика у дев'ятому класі)</h3>
			</div>
			<div class="row">
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('main')">Головна</button>
				</div>
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('aboutUs')">Про нас</button>		
				</div>
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<a href="http://school-1-timch.klasna.com" target="_blank"><button type="button" class="btn btn-secondary menu-btn">Сайт школи</button></a>
				</div>
			</div>`
	} else {
		document.getElementById('menu').innerHTML = 
			`<div class="row">
				<div class="col-12">
					<div class="row">
						<div class="col-9 text-left">
							<h2 class="zcol">Проект "ІДК"</h2>
							<h3 class="fcol">інформатика дев'ятого класу</h3>
						</div>
						<div class="text-right col-3">
							<nav class="tnavbar navbar-dark">
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileMenu">
									<span class="navbar-toggler-icon"></span>
								</button>
							</nav>
						</div>
					</div>
					<div class="collapse navbar-collapse" id="mobileMenu">	
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('main')" data-toggle="collapse" data-target="#mobileMenu">Головна</button>
							</li>
							<li class="nav-item">
								<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('aboutUs')" data-toggle="collapse" data-target="#mobileMenu">Про нас</button>	
							</li>
							<li class="nav-item">
								<a href="http://school-1-timch.klasna.com" target="_blank"><button type="button" class="btn btn-secondary menu-btn" data-toggle="collapse" data-target="#mobileMenu">Сайт школи</button></a>
							</li>
						</ul>
					</div>
				</div>
			</div>`
	}
}

const newContent = (type) => {
	if (type == 'cat') {
		document.getElementById('content').innerHTML = 
		  `<img style="-webkit-user-select: none;cursor: zoom-in;" src="kotic.png" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth}">`;
  }

	if (type == 'aboutUs') {
		document.getElementById('content').innerHTML = 
		  `<div class="row">
				<div class="col">
					<h4>Наші працівники</h4>
				</div>
			</div>
			<div class="row">
				<div class="text-left col">
					<ul>
						<li>Учитель та спеціаліст по алгоритмам - Галина Леонідівна</li>
						<li>Спеціаліст по картах знань - Світлана Олександрівна</li>
						<li>Спеціаліст по рекламі та брошурам - Надія Сергіївна</li>
						<li>Спеціаліст по збиранню інформації - Катерина Валентинівна</li>
						<li>Спеціаліст по тестам - Руслан Андрійович</li>
						<li>Спеціаліст по веб-сторінкам  - Степан Павлович</li>
						<li>Учень - Олександр Олегович</li>
						<li>Учень - Іван Володимирович</li>
					</ul>
				</div>
			</div>`;
  }

	if (type == 'main') {
		document.getElementById('content').innerHTML = 
			`<div class="row">
				<div class="col">
					<h4>Головна</h4>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<button type="button" class="btn content-btn" onclick="newContent('info')">Брошура</button>
					<button type="button" class="btn content-btn" onclick="newContent('media')">Презентація</button>
					<button type="button" class="btn content-btn" onclick="newContent('text')">Основний текст</button>
					<button type="button" class="btn content-btn" onclick="newContent('map')">Дерево знань</button>
					<button type="button" class="btn content-btn" onclick="newContent('test')">Тести</button>								
				</div>
			</div>`;
	}
	
	if (type == 'info') {

	}

	if (type == 'media') {
		
	}

	if (type == 'text') {
		
	}

	if (type == 'map') {
		document.getElementById('content').innerHTML = 
			`<div>
				<div class="row">
					<div class="col">
						<h4>Дерево знань</h4>
					</div>
				</div>
				<div class="row">
					<div class="text-left col">
						<h5>Курс інформатики у дев'ятому класі</h5>
						<ol>
							<li>Інформаційні технології в суспільстві
								<ul>
									<li>Інформаційні процеси
										<ol>
											<li>Зберігання</li>
											<li>Передавання</li>
											<li>Опрацювання</li>
										</ol>
									</li>
									<li>Інтелектуальна власність
										<ol>
											<li>Художні твори</li>
											<li>Програми</li>
											<li>Бази даних</li>
											<li>Відкриття</li>
											<li>Винаходи</li>
											<li>Пропозиції</li>
											<li>Комерційні таэмниці</li>
											<li>Авторські знаки</li>
										</ol>
									</li>
								</ul>
							</li>
							<li>Мережеві технології
								<ul>
									<li>Мережеві пристрої
										<ol>
											<li>Адаптер</li>
											<li>Комутатор</li>
											<li>Маршрутизатор</li>
										</ol>
									</li>
									<li>Протоколи
										<ol>
											<li>FTP</li>
											<li>SMTP</li>
											<li>POP3</li>
											<li>SIP</li>
											<li>RTP</li>
											<li>HTTP</li>
										</ol>
									</li>
									<li>Служби Інтернету
										<ol>
											<li>Передавання файлів</li>
											<li>Комунікація</li>
											<li>Перегляд гіпертексту</li>
										</ol>
									</li>
									<li>Позначення у пошуковому запиті
										<ol>
											<li>Пошук "слова"</li>
											<li>Не шукати -слово</li>
											<li>Шукати * (що-небудь)</li>
										</ol>
									</li>
								</ul>
							</li>
							<li>Комп’ютерні презентації
								<ul>
									<li>Етапи створення комп'ютерної презентації
										<ol>
											<li>Визначення мети</li>
											<li>Підбір матеріалів</li>
											<li>Визначення структури</li>
											<li>Розробка сценарію</li>
											<li>Створення презентації</li>
										</ol>
									</li>
									<li>Дизайн презентації
										<ol>
											<li>Композиція</li>
											<li>Кольористика</li>
											<li>Ергономіка</li>
										</ol>
									</li>
									<li>Додатки у презентації
										<ol>
											<li>Гіперпосилання</li>
											<li>Діаграми</li>
											<li>Мультимедіа</li>
											<li>Анімації</li>
										</ol>
									</li>
								</ul>
							</li>
							<li>Основи інформаційної безпеки
								<ul>
									<li>Інформаційна безпека
										<ol>
											<li>Доступність</li>
											<li>Конфединційність</li>
											<li>Цілісність</li>
										</ol>
									</li>
									<li>Шкідливі програми
										<ol>
											<li>Комп'ютерні віруси</li>
											<li>Хробаки</li>
											<li>Троянські програми</li>
											<li>Рекламні модулі</li>
											<li>Руткіти</li>
											<li>Експлойти</li>
											<li>Бекдори</li>
										</ol>
									</li>
									<li>Загрози комп'ютерних мереж
										<ol>
											<li>Комунікаційні ризики</li>
											<li>Контентні ризики</li>
											<li>Споживчі ризики</li>
											<li>Технічні ризики</li>
										</ol>
									</li>
								</ul>
							</li>
							<li>Комп’ютерне моделювання

							</li>
							<li>Табличні величини та алгоритми їх опрацювання

							</li>
							<li>Комп’ютерні публікації

							</li>
							<li>Комп’ютерна графіка. Векторний графічний редактор

							</li>
							<li>Створення персонального навчального середовища

							</li>
							<li>Розв’язування компетентнісних задач

							</li>
						</ol>						
					</div>
				</div>
			</div>`;
	}

	if (type == 'test') {
			makeTest(0, 0);
	}
}

let count = 0;
let acc = 0;
let currentRight;

const answer = (id) => {
	id == currentRight ? acc++: acc;
	makeTest()
}

const makeTest = () => {
	const quantQuest = testData.length;
	
	if (count == quantQuest) {
		const score = 12 / quantQuest * acc;
		document.getElementById('content').innerHTML =
			`<div class="row">
				<div class="col">
					<h4>Ваш вирішили ${acc} із ${quantQuest} ${quantQuest % 10 == 1 && quantQuest != 11 ? 'завдання': 'завдань'}.</h4>
					<h4>Ви отримали: ${score} балів ${score == 0 ? '&#128566': score <= 2 ? '&#128544':score <= 4 ? '&#128530': score <= 7 ? '&#128528': score <= 9 ? '&#128534': score <= 11 ? '&#128527': '&#128522'}</h4>
					<button type="button" class="btn content-btn" onclick="count = 0; acc = 0; makeTest()">Пройти тест знову</button>
				</div>
			</div>`
		return
	}


	const shuffle = (array) => {
		let currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	}


	const answers = shuffle(testData[count].answers).sort(() => Math.random() - 0.5);
	const question = testData[count].question;
	currentRight = testData[count].right;
	
	const answersGen = () => {
		count++;
		let result = ``;
		for (let i = 0; i < answers.length; i++) {
			result += `<button type="button" class="btn content-btn" onclick="answer(${answers[i].id})">${answers[i].answer}</button>`;
		}
		result += `<button type="button" class="btn content-btn" onclick="makeTest()">Я не знаю</button>`;

		return result;
	}

	document.getElementById('content').innerHTML =
		`<div class="row">
			<div class="col text-left">
				<h4>Тест №${count + 1}/${quantQuest}</h4>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h4>${question}</h4>
			</div>
		</div>
		<div class="row">
			<div class="col">
				${answersGen()}
			</div>
		</div>`;
}
