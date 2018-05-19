const makeBookPhone = () => {
	document.getElementById('content').innerHTML = 
	`<object><embed src="http://www.slideshare.net/slideshow/embed_code/79083484" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth * 1.484}"" /></object>`;
}

const makeBookPC = () => {
	document.getElementById('content').innerHTML = 
	`<embed src="book.pdf" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth * 1.484}" type='application/pdf'>`
}
