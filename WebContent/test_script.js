
	let paragraph = document.getElementById("par");
	let textLine;
	for(let i = 0; i<10; i++ ){
		textLine = document.createTextNode("" + i);
        paragraph.appendChild(textLine);
	}