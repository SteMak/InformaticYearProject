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

const textData = reuest('text.json');

const makeText = () => {	
	const paragrafGen = () => {
		let result = ``;
		for (let i = 0; i < textData.length; i++) {
			if(textData[i].title) {
				result += `<h5>${textData[i].title}</h5>`;
			}
			if(textData[i].text) {
				result += `<p>${textData[i].text}</p>`;
			}
			if(textData[i].list) {
				result += `<ul>`;
				for (let k = 0; k < textData[i].list.length; k++) {
					result += `<li>${textData[i].list[k]}</li>`;
				}
				result += `</ul>`;
			}
			if(textData[i].image) {
				result += `<img src="${textData[i].image}">`;
			}
		}

		return result;
	}

	document.getElementById('content').innerHTML =
		`<div class="row">
			<div class="col text-left">
				<h4>Текстова база</h4>
			</div>
		</div>
		<div class="row">
			<div class="col">
				${paragrafGen()}
			</div>
		</div>`;
}
