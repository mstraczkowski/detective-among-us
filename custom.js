$(function() {

	// Handle event when user has clicked on color
	$('.color').click(function() {

		// Searching for "i" element inside
		var i = $(this).find('i');

		// Getting current states
		var isTick     = i.hasClass('fa-check');
		var isQuestion = i.hasClass('fa-question');
		var isDead     = i.hasClass('fa-skull-crossbones');
		var isBlank    = !isTick && !isQuestion && !isDead;

		// Setting differenct icon depending on current state
		if (isBlank) {
			i.attr('class', 'fa fa-question fa-4x');
		}
		else if (isQuestion) {
			i.attr('class', 'fa fa-check fa-4x');
		}
		else if (isTick) {
			i.attr('class', 'fa fa-skull-crossbones fa-4x');
		}
		else if (isDead) {
			i.attr('class', '');
		}
	});

	// User has pressed "Clear" button
	$('.btn-reset').click(function() {

		// Asking about clearing board
		if (confirm('Are you sure you want to clear the board?')) {

			// Clearing all colors
			$('.color').find('i').attr('class', '');
		}
	});
});
