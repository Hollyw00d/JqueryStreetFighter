// Functions to be called back
function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

// Shorthand Document Ready Function
$(function() {



	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();

	})
	.mouseleave(function() {
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
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
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

});