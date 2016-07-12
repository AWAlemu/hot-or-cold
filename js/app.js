$(document).ready(function(){
	
	//Start a new game when the page loads
	var counter = 0;
	inputTracker = new Array();
	var number = newGame();

	//Start a new game when user clicks new game
	$('.new').click(function() {
		number = newGame();
	});

	//Start a new game when user clicks play again
	$('#playAgain').click(function() {
		number = newGame();
	});

	//User guess event handler 
	$('#guessButton').click(function(event) {
		event.preventDefault();
		var input = validateInput();
		$('#userGuess').val('');
		if (input) {
			$('#guessList').append('<li>' + input + '</li>');
			feedback(input, number);
		}
	});
 	

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});


function generateNumber() {
	var num = Math.floor((Math.random() * 100) + 1);
	return num;
}

function validateInput() {
	var input = $('input[name=userGuess').val();
	if (input == "") { 
		//Do nothing
	}
	else if (isNaN(input) || input < 1 || input > 100) {
		alert('Please Enter a Number Between 1 and 100');
	}
	else if (inputTracker.indexOf(input) > -1){
		alert('You Guessed This Number Already. Please Try a Different Number');
	}
	else if (inputTracker.indexOf(input) == -1) {
		inputTracker.push(input);
		return input;	
	}
	return false;		
}
function newGame() {
	reset();
	return generateNumber();
}
function feedback(guess, number) {
	var nmbr = number;
	if (guess == nmbr) {
		$('h2#feedback').html('Correct Guess, Great Job!');
		$('#userGuess').css('display', 'none');
		$('#guessButton').css('display', 'none');
		$('#playAgain').css('display', 'block');
	}
	else if (guess <= nmbr - 50 || guess >= nmbr + 50) {
		$('h2#feedback').html('Ice Cold');
	}
	else if (guess <= nmbr - 30 || guess >= nmbr + 30) {
		$('h2#feedback').html('Cold');
	}
	else if (guess <= nmbr - 20 || guess >= nmbr + 20) {
		$('h2#feedback').html('Warm');
	}	
	else if (guess <= nmbr - 10 || guess >= nmbr + 10) {
		$('h2#feedback').html('Hot');
	}
	else if (guess > nmbr - 10 || guess < nmbr + 10) {
		$('h2#feedback').html('Very Hot');
	}
	counter++;
	$('span#count').html(counter);
}
function reset() {
	counter = 0;
	inputTracker.length=0;
	$('h2#feedback').html('Make your Guess!');
	$('#playAgain').css('display', 'none');
	$('#userGuess').css('display', 'block');
	$('#guessButton').css('display', 'block');
	$('span#count').html(counter);
	$('#guessList').empty();
}