// Callback function to play ryu hadouken sound
function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}


// Callback functions for pressing "x" on keyboard using keydown and keyup
function pressXKey(event) {
	if(event.which == 88) {
		// show ryu-cool img
		$(".ryu-cool").show();

		// hide all other images of ryu and hadouken
		$(".ryu-ready").hide();
		$(".ryu-still").hide();
		$(".ryu-throwing").hide();
		$(".hadouken").hide();
	}
	return false;
}

function letXKeyGo(event) {
	if(event.which == 88) {
		// show ryu-still img
		$(".ryu-still").show();

		// hide all other images of ryu and hadouken
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-cool").hide();
		$(".hadouken").hide();
	}
	return false;
}


// Shorthand Document Ready Function
$(function() {

	/*
	- Functions to show/hide ryu still, ready and throwing motions
	- Also calls the playHadouken callback to play sound
	*/
	$(".ryu").mouseenter(function() {
		$(".ryu-ready").show();
		$(".ryu-still").hide();
		$(".ryu-cool").hide();
	})
	.mouseleave(function() {
		$(".ryu-still").show();
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
				{"left": "300px"},
				"fast",
				function() {
					$(this).hide();
					$(this).css("left", "-212px");
				}
		);
		$(".ryu-ready").hide();
		$(".ryu-cool").hide();
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
	});


	// Press "x" on keyboard & ryu goes to cool pose
	$("body").keydown(pressXKey)
	.keyup(letXKeyGo);

//	.mouseover(function() {
//				$(".ryu-ready").show();
//				$(".ryu-still").hide();
//				$(".ryu-cool").hide();
//	});

});