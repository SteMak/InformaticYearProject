const makeBookPhone = () => {
	document.getElementById('content').innerHTML = 
	`<iframe src="http://www.slideshare.net/slideshow/embed_code/79083484" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth * 1.484} frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="margin-bottom:5px; max-width: 100%;" allowfullscreen=""> </iframe>`;
}

const makeBookPC = () => {
	document.getElementById('content').innerHTML = 
	`<embed src="book.pdf" width="${document.getElementById('content').clientWidth}" height="${document.getElementById('content').clientWidth * 1.484}" type='application/pdf'>`
}
