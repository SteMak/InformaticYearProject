let count = 0;
let acc = 0;
let currentRight;

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

const answer = (id) => {
	id == currentRight ? acc++: acc;
	makeTest()
}

const makeTest = (kik) => {
	if (kik) {
		count = 0;
		acc = 0;
	}
	const quantQuest = testData.length;
	
	if (count == quantQuest) {
		const score = Math.round(12 / quantQuest * acc);
		document.getElementById('content').innerHTML =
			`<div class="row">
				<div class="col">
					<h4>Ваш вирішили ${acc} із ${quantQuest} ${quantQuest % 10 == 1 && quantQuest != 11 ? 'завдання': 'завдань'}.</h4>
					<h4>Ви отримали: ${score} балів ${score == 0 ? '&#128566': score <= 2 ? '&#128544':score <= 4 ? '&#128542': score <= 7 ? '&#128530': score <= 9 ? '&#128528': score <= 11 ? '&#128527': '&#128522'}</h4>
					<button type="button" class="btn content-btn" onclick="makeTest(true)">Пройти тест ще раз</button>
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
			<div class="col">
				<h4>Тест №${count + 1}/${quantQuest}</h4>
			</div>
		</div>
		<div class="row">
			<div class="col text-left">
				<h5>${question}</h5>
			</div>
		</div>
		<div class="row">
			<div class="col">
				${answersGen()}
			</div>
		</div>`;
}
