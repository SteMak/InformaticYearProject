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
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<button type="button" class="btn btn-secondary" onclick="newContent('main')">Головна</button>
				</div>
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<button type="button" class="btn btn-secondary" onclick="newContent('aboutUs')">Про нас</button>		
				</div>
				<div class="col-12 col-lg-4 col-md-4 col-sm-4">
					<a href="http://school-1-timch.klasna.com" target="_blank"><button type="button" class="btn btn-secondary">Сайт школи</button></a>
				</div>
			</div>`
	} else {
		document.getElementById('menu').innerHTML = 
			`<nav class="navbar navbar-dark">
				<div class="navbar-brand"></div>
				<button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#mobileMenu" aria-controls="mobileMenu" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="mobileMenu">	
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<button type="button" class="btn btn-secondary" onclick="newContent('main')">Головна</button>
						</li>
						<li class="nav-item">
							<button type="button" class="btn btn-secondary" onclick="newContent('aboutUs')">Про нас</button>	
						</li>
						<li class="nav-item">
							<a href="http://school-1-timch.klasna.com" target="_blank"><button type="button" class="btn btn-secondary">Сайт школи</button></a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="row">
				<h1 class="col-lg-12 col-md-12 col-sm-12 masthead-brand">Проект "ІДК"</h1>
				<h3 class="col-lg-12 col-md-12 col-sm-12">інформатика у дев'ятому класі</h3>
			</div>`
	}
}

const newContent = (type) => {
	if(type == 'cat') {
		document.getElementById('content').innerHTML = 
		  `<img style="-webkit-user-select: none;cursor: zoom-in;" src="kotic.png" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth}">`;
  }

	if(type == 'aboutUs') {
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
						<li>Спеціаліст по рекламі та брошурам - Надія Сергійовна</li>
						<li>Спеціаліст по збиранню інформації - Катерина Батьковна</li>
						<li>Спеціаліст по тестам - Руслан Андрійович</li>
						<li>Спеціаліст по веб-сторінкам  - Степан Павлович</li>
						<li>Учень - Олександр Олегович</li>
						<li>Учень - Іван Володимирович</li>
					</ul>
				</div>
			</div>`;
  }

    if(type == 'main') {
      document.getElementById('content').innerHTML = 
				`<div class="row">
					<div class="col">
						<h4>Головна</h4>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<button type="button" class="btn btn-secondary" onclick="newContent('info')">Брошура</button>
						<button type="button" class="btn btn-secondary" onclick="newContent('media')">Презентація</button>
						<button type="button" class="btn btn-secondary" onclick="newContent('text')">Основний текст</button>
						<button type="button" class="btn btn-secondary" onclick="newContent('map')">Дерево знань</button>
						<button type="button" class="btn btn-secondary" onclick="newContent('test')">Тести</button>								
					</div>
				</div>`;
		}
		
		if(type == 'map') {
			document.getElementById('content').innerHTML = 
				`<div>
					<div class="row">
						<div class="col">
							<h4>Дерево знань</h4>
						</div>
					</div>
					<div class="row">
						<div class="text-left col">
							<h6>Курс інформатики у дев'ятому класі</h6>
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
										<li>Комп'ютерні мережі
											<ol>
												<li>Локальні</li>
												<li>Регіональні</li>
												<li>Глобальні</li>
											</ol>
										</li>
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

								</li>
								<li>Основи інформаційної безпеки

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
								<li>Розв’язування компетентнісних задач. Виконання колективного навчального проекту

								</li>
							</ol>						
						</div>
					</div>
				</div>`;
		}
}
