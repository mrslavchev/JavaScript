/*
	Create a module to work with the console object .
	Incorrectmplement functionality for:
	 Writing a line to the console
 	Writing a line to the console using a format
 	Writing to the console should call toString() to each
	element
 	Writing errors and warnings to the console with and
	without format
*/


var consoleCommander = (function(){
	function writeLine(input){
		console.log(input.toString());
	}

	function logWarning(input){
		var css = 'background:#000; color : #ffff00; font-weight: bold;';
		console.log('%cWarning: %s' , css,  input.toString());
	}

	function logError(input){
		var css = 'background:#000; color : #ff0000; font-weight: bold;';
		console.log('%cError: %s' , css,  input.toString());
	}

	/*No logic for more than one argument but I believe this will make it over complicated, 
	I mean throwing error if placeholder but no argument and so on.*/
	function writeFormat(formattedStr, input){
		var output = formattedStr.replace(/{\d}/, input.toString()); 
		console.log(output.toString());
	}

	function logWarningFormat(formattedStr, input){
		var output = formattedStr.replace(/{\d}/, input);
		var css = 'background:#000; color : #ffff00; font-weight: bold;';
		console.log('%cWarning: %s' , css,  output.toString());
	}

	function logErrorFormat(formattedStr, input){
		var output = formattedStr.replace(/{\d}/, input);
		var css = 'background:#000; color : #ff0000; font-weight: bold;';
		console.log('%cError: %s' , css,  output.toString());
	}

	return {
		writeLine : writeLine,
		logWarning : logWarning,
		logError : logError,
		writeFormat : writeFormat,
		logWarningFormat : logWarningFormat,
		logErrorFormat : logErrorFormat
	}
}());

// Tests. Please check the console.
var a = [1, 2, 3];
consoleCommander.writeLine(a);
consoleCommander.logWarning('something smells in your code');
consoleCommander.logError('Critical error.');
consoleCommander.writeFormat('Hello {0}, welcome to Earth', 'Kurt');
consoleCommander.logWarningFormat('Incorrect syntax at {0} row', 10);
consoleCommander.logErrorFormat('Critical exception thrown by file {0}', 'DOM/Manipulations/script.js');