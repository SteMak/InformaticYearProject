document.addEventListener("DOMContentLoaded", function(event) {
	newContent('main');
	newHeader();
});

const newHeader = () => {
	if (document.getElementsByClassName('no-touchevents').length > 0) {
		document.getElementById('menu').innerHTML = 
			`<div class="row">
				<h1 class="col-lg-12 col-md-12 col-sm-12 masthead-brand">Проект "ІДК"</h1>
				<h3 class="col-lg-12 col-md-12 col-sm-12">(інформатика у дев'ятому класі)</h3>
			</div>
			<div class="row">
				<div class="${document.getElementById('menu').clientWidth >= 510 ? 'menu-col-left col-4': 'col-12'}">
					<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('main')">Головна</button>
				</div>
				<div class="${document.getElementById('menu').clientWidth >= 510 ? 'menu-col-center col-4': 'col-12'}">
					<button type="button" class="btn btn-secondary menu-btn" onclick="newContent('aboutUs')">Про нас</button>		
				</div>
				<div class="${document.getElementById('menu').clientWidth >= 510 ? 'menu-col-right col-4': 'col-12'}">
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
						<li>Спеціаліст по презентаціям - Катерина Валентинівна</li>
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
					<button type="button" class="btn content-btn" onclick="newContent('info')">Буклет</button>
					<button type="button" class="btn content-btn" onclick="makeMedia(0)">Презентація</button>
					<button type="button" class="btn content-btn" onclick="makeText()">Текстова база</button>
					<button type="button" class="btn content-btn" onclick="makeMap()">Дерево знань</button>
					<button type="button" class="btn content-btn" onclick="makeTest(true)">Тести</button>								
				</div>
			</div>`;
	}
	
	if (type == 'info') {
		if (document.getElementsByClassName('touchevents').length > 0) {
			document.getElementById('content').innerHTML = 
				`<div class="row">
					<div class="col">
						<h4>Буклет</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<h5>Цей сайт вам допоможе</h5>
						<ul>
							<li>Пригадати курс інформатики дев'ятого класу</li>
							<li>Знайти основні відомості з нашого підручника</li>
							<li>Провтикати півгодинки в комп'ютер із користю</li>
							<li>Навчиться користуватися кнопками навігації (Меню)</li>
						</ul>

						<button type="button" class="btn content-btn" onclick="makeBookPhone()">Підручник (βeta)</button>
					</div>
				</div>`
		} else {
			document.getElementById('content').innerHTML = 
				`<div class="row">
					<div class="col">
						<h4>Буклет</h4>
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<h5>Цей сайт вам допоможе</h5>
						<ul>
							<li>Пригадати курс інформатики дев'ятого класу</li>
							<li>Знайти основні відомості з нашого підручника</li>
							<li>Провтикати півгодинки в комп'ютер із користю</li>
							<li>Навчиться користуватися кнопками навігації (Меню)</li>
						</ul>
						<img style="-webkit-user-select: none;cursor: zoom-in;" src="book.png" width="${document.getElementById('content').clientWidth / 2.25}" height="${document.getElementById('content').clientWidth / 2.25 * 1.47}" onclick="makeBookPC()">
					</div>
					<div class="col-6">
						<h5>Основними інформаційними процесами є:</h5>
						<ul>
							<li>Зберігання</li>
							<li>Передавання</li>
							<li>Опрацювання</li>
						</ul>

						<h5>До інтелектуальної власності належать:<h5>
						<ul>
							<li>Художні твори</li>
							<li>Бази даних</li>
							<li>Відкриття</li>
							<li>Винаходи</li>
							<li>Пропозиції</li>
							<li>Авторські знаки</li>
							<li>Комерційні таємниці</li>
							<li>Програми</li>
						</ul>

						<h5>До інформаційної безпеки належать:<h5>
						<ul>
							<li>Доступність</li>
							<li>Конфіденційність</li>
							<li>Цілісність</li>
						</ul>

						<h5>Загрози комп’ютерних мереж:<h5>
						<ul>
							<li>Комунікаційні ризики</li>
							<li>Контенті ризики</li>
							<li>Споживчі ризики</li>
							<li>Технічні ризики</li>
						</ul>
					</div>
				</div>`;
		}
	}

}
