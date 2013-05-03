/*Create a module for working with DOM. The module should have the following functionality
Add DOM element to parent element given by selector
Remove element from the DOM  by given selector
Attach event to given selector by given event type and event hander
Add elements to buffer, which appends them to the DOM when their count for some selector becomes 100
The buffer contains elements for each selector it gets
Get elements by CSS selector
The module should reveal only the methods*/

//define self-invoking function domModule, beneath it are it's methods
var domModule = (function(){

	function addChild(selector, element, innerText){
	var newElement = document.createElement(element);
	newElement.style.background = "red"; //hardcoded color and border, for better visibility
	newElement.style.border = "2px solid black"
	newElement.innerHTML = innerText;
	var container = document.querySelector(selector);
	container.appendChild(newElement);
	}

	function removeElement(selector){
		var toDelete = document.querySelector(selector);
		var parent = toDelete.parentNode; //use parent node, so we don't need second argument
		parent.removeChild(toDelete);
	}

	function addEvent(selector, eventType, eventFunction){
		var target = document.querySelector(selector);
		target.addEventListener(eventType, eventFunction, false);


	}

	var elementsBuffer = {};
	var maxBufferSize = 100;
	function appendToBuffer(selector, element ,attributes, innerText){
		if (!elementsBuffer[selector]) { // check if key value exists 
			elementsBuffer[selector]= document.createDocumentFragment();
		};

		var elementToAppend = document.createElement(element);
		elementToAppend.setAttribute('style', attributes);
		var content = document.createTextNode(innerText);
		elementToAppend.appendChild(content);
		elementsBuffer[selector].appendChild(elementToAppend);

		if (elementsBuffer[selector].childNodes.length === maxBufferSize){
			var parent = document.querySelector(selector);
			parent.appendChild(elementsBuffer[selector]);
			elementsBuffer[selector] = null; //empty key value
		};
		
	}

	return{
		addChild: addChild,
		removeElement:removeElement, 
		addEvent:addEvent, 
		appendToBuffer:appendToBuffer
	}

})();
//Uncomment the following to test functionalities

//domModule.addChild('#wrapper', 'div', 'This is made by domModule <--');
//domModule.removeElement('li:first-child');
//domModule.addEvent('a.button', 'click', function(){alert('Clicked by domModule')}); 
//var i;
//for (var i = 0; i <= 100; i++) {
	//domModule.appendToBuffer('#wrapper', 'div', 'background:blue', 'I came from buffer!');
//};
