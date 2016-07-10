
$(document).ready(function(){
	
	//Start a new game on page load
	number = newGame();
	counter = 0;

	//Start a new game when start page selected
	$('.new').click(function() {
		number = newGame();
	});

	//User guess event handler 
	$('#guessButton').click(function() {
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
	if (isNaN(input) || input < 1 || input > 100) {
		alert('Please Enter a Number Between 1 and 100');
	}
	else {
		return input;
	}
}
function newGame() {
	reset();
	return generateNumber();
}
function feedback(guess, number) {
	var nmbr = number;
	if (guess <= nmbr - 50 || guess >= nmbr + 50) {
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
	$('h2#feedback').html('Make your Guess!');
	counter = 0;
	$('span#count').html(counter);
	$('#guessList').empty();
}