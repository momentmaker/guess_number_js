$(document).ready(function() {
	var MAX = 100;
	var correct_number = parseInt(Math.floor((Math.random() * MAX )));
	var guesses = [];

	$('#max_num').html("Guess a number between 0 - " + MAX);

	$('form').on('submit', function(event) {
		event.preventDefault();

		var user_guess = +$('#guess_num').val();
		guesses.push(user_guess);

		if (user_guess < correct_number) {
			$('#try-again').html("Too low. Guess again.");
		} else {
			if (user_guess > correct_number) {
			$('#try-again').html("Too high. Guess again.");
			} else {
				if (user_guess === correct_number) {
					$('#try-again').html("Congrats! You've won! You guessed " + guesses.length.toString() + " times.");
		
				}
			}
		}
	});

	$('form').on('reset', function(event) {
		event.preventDefault();
		document.location.reload();
	});

});