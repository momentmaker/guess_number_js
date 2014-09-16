$(document).ready(function() {
	function checkGuess() {
		if ($('#try-again').css('display') != "block") {
			$('#try-again').toggle();
		}
		if ($('#error').css('display') == "block") {
			$('#error').toggle();
		}
	}

	function checkError() {
		if ($('#error').css('display') != "block") {
				$('#error').toggle();
		}
		if ($('#try-again').css('display') == "block") {
			$('#try-again').toggle();
		}
	}

	var MAX = 100;
	var correct_number = parseInt(Math.floor((Math.random() * MAX )));
	var guesses = [];

	$('#reset_btn').toggle();
	$('#max_num').html("Guess a number between 0 - " + MAX);

	$('form').on('submit', function(event) {
		event.preventDefault();

		var user_guess = +$('#guess_num').val();

		if(isNaN(user_guess)) {
			checkError();
			$('#error').html("Not a valid number. Please retry!")
		} else {
			guesses.push(user_guess);
			// debugger;
			checkGuess();
			if (user_guess < correct_number) {
				$('#try-again').html("Too low. Guess again.");
			} else {
				if (user_guess > correct_number) {
				$('#try-again').html("Too high. Guess again.");
				} else {
					if (user_guess === correct_number) {
						$('#try-again').html("Congrats! You've won! You guessed " + guesses.length.toString() + " times.");
						$('#guess_num').prop("disabled", true);
						$('#reset_btn').toggle();
					}
				}
			}
		}	
		$('#guess_num').val('');	
	});

	$('form').on('reset', function(event) {
		event.preventDefault();
		document.location.reload();
	});

});