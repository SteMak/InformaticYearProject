document.addEventListener("DOMContentLoaded", function(event) {
	newContent('main');
});

const newContent = (type) => {
	if(type == 'aboutUs') {
		document.getElementById('content').innerHTML = 
			`<div>
				<div class="row">
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
				</div>
			</div>`;
    }

    if(type == 'main') {
      document.getElementById('content').innerHTML = 
        `<div>
          <div class="row">
            <div class="col">
              <h4>Головна</h4>
            </div>
          </div>
					<div class="row">
						<div class="col-12 col-sm-12">
							<button type="button" class="btn btn-secondary" onclick="newContent('')">Брошура</button>
							<button type="button" class="btn btn-secondary" onclick="newContent('')">Презентація</button>
							<button type="button" class="btn btn-secondary" onclick="newContent('')">Основний текст</button>
							<button type="button" class="btn btn-secondary" onclick="newContent('')">Карта знань</button>
							<button type="button" class="btn btn-secondary" onclick="newContent('')">Тести</button>								
						</div>
					</div>
        </div>`;
    }
}
