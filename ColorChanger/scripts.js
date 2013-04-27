function changeColor(){
	var fontCol = document.getElementById('fontColor').value;
	var bgCol = document.getElementById('bgColor').value;
	var textarea = document.getElementById('output');
    textarea.style.color = fontCol;
    textarea.style.background = bgCol;
    console.log(fontCol, bgCol);
    console.log(document.getElementById('output'));
}     
