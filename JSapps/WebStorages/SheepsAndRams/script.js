var number = generateNumber();
//var number = '1234'; // Left this here for easier testing.
var $scoreList = $('#scorelist');

$(document).ready(function () {
    updateScorelist($scoreList);
    var $scoreform = $('#addscore');
    $scoreform.hide();

    $('#execute').click(function () {
        var text = $('#input').val();
        try {
            filterInput(text);
        } catch (err) {
            var message = 'Wrong input!\nInput must be:\nnumber - 4 digits long\nNumeric only\nMust not start with 0\nMust not have repetitions.';
            alert(message);
        }

        var result = compareStrings(number, text);
        var $history = $('#history');
        if (result) {
            if (result.ram === 4) {
                $scoreform.show();
            }
            else {
                addResultsToContainer($history, result, text);
            }
        }
    })

    $('#savescore').click(function(){
        var scoreInput = $('#username').val();
        console.log(scoreInput);
        if (!(scoreInput)) {
            alert('Please write a user name.');
            return;
        };

        addToLocalStorage(scoreInput);
        updateScorelist($scoreList);
        $scoreform.hide();
    })
})
/**
    By a given container, adds corrent guess + found rams and sheep.
*/
function addResultsToContainer($container, resutlsObject, playerGuess) {
    $container.append('<p> Number: <strong>' + playerGuess + '</strong> - Sheep: ' +
     resutlsObject.sheep + ', Ram: ' + resutlsObject.ram + '</p>');
}

/**
    Compares two strings and returns object containing the number of sheeps and rams respectively.
*/
function compareStrings(input, guess) {
    var output = { sheep: 0, ram: 0 };
    var i, k;
    for (var i = 0; i < 4; i++) {
        for (var k = 0; k < 4; k++) {
            if (input[i] === guess[k]) {
                if (i === k) {
                    output.ram++;
                }
                else {
                    output.sheep++;
                }
            }
        }
    }

    return output;
}

/**
    The only job of this function is to cry if invalid input occurs.
    Note! I am not filtering the case if the user inputs repeeated digits, 
    after all the program should not care if the user knows the rules or not. 
    Matter of fact, he won't earn anything by inputting repeated digits.
*/
function filterInput(input) {
    if (!input) {
        throw 'Empty value is not ';
    }
    else if (!parseInt(input)) {
        throw 'Input can not be alphanumeruc value.';
    }
    else if (input.length !== 4) {
        throw 'Input number must be 4 digits long.';
    }
    else if (input[0] === '0') {
        throw 'Input can not start with 0.';
    }
}

/**
    Generates random number from 0 to 9. We are poping out the 
    values of an array to avoid repetitions. We reverse the string incase 
    the first position is zero.
*/
function generateNumber(){
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var random;
    var numbersLength;
    var output = '';
    for (var i = 0; i < 4; i++) {
        numbersLength = numbers.length;
        random = Math.floor(Math.random() * (numbersLength - 0));
        output += numbers.splice(random, 1);
    };

    // Hack to avoid zero in the forst position. Just reversing it.
    if(output[0] === '0'){
        return output.split('').reverse().join('');
    }
    
    return output;
}

// Adds item to local storage.
function addToLocalStorage(userInput){
    localStorage[userInput] = userInput;
}

function updateScorelist($container){
    var element;
    $container.empty();
    for (var i = 0; i < localStorage.length; i++) {
        element = '<p><strong>' + localStorage.getItem(localStorage.key(i)) + '</strong></p>'
        $container.append(element);
    };
}