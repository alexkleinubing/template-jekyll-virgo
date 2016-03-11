/* Smooth Scroll to Anchor */
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/* */
$(document).ready(function() {
	var offset=250,
	scrollDuration=500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.top').fadeIn(300);
		} else {
			$('.top').fadeOut(300);
		}
	});
	$('.top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, scrollDuration);
	})
});