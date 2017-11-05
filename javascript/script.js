$(document).ready(function() {
	

	// Navigation stick to top after scroll
	var nav = $(".nav");
	var sec1 = $(".section1");

	$(window).scroll(function() {

		// Convert pixels into veiwport height
		var height = window.innerHeight;
		var vh = height * 0.92;

		// Makes Navigation stick to top after scrolling past it
		if($(this).scrollTop() > vh) {
			nav.addClass("nav-top");
		} else {
			nav.removeClass("nav-top");
		}
	});

	// Smooth scrolling
	$("a").click(function() {
		var top = $("body").find($(this).attr("href")).offset().top;
		$("html, body").animate({
			scrollTop: top
		}, 1000);

		return false;
	});

});