const makeMap = () => {
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
    
    const mapData = reuest('map.json');
    
    const mapGen = () => {
        result = `<ol>`;
        for (let i = 0; i < mapData.length; i++) {
            result += `<li>${mapData[i].name}`;
                result += `<ul>`;
                for (let k = 0; k < mapData[i].list.length; k++) {
                    result += `<li>${mapData[i].list[k].name}`;
                        result += `<ol>`;
                        for (let x = 0; x < mapData[i].list[k].list.length; x++) {
                            result += `<li>${mapData[i].list[k].list[x].name}</li>`;
                        }
                        result += `</ol>`;
                    result += `</li>`
                }
                result += `</ul>`;
            result += `</li>`
		}
        result += `</ol>`

		return result;
    }

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
                    ${mapGen()}					
                </div>
            </div>
        </div>`;
}