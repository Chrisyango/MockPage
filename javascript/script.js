$(document).ready(function() {
	
	var nav = $(".nav");
	var sec1 = $(".section1");

	$(window).scroll(function() {
		var height = window.innerHeight;
		var vh = height * 0.92;
		if($(this).scrollTop() > vh) {
			nav.addClass("nav-top");
			sec1.addClass("nav-section");
		} else {
			nav.removeClass("nav-top");
			sec1.removeClass("nav-section");
		}
	});

});