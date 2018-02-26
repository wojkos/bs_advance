$(document).ready(function(){

	$('#top-slider').carousel({
		interval: 4000
	});
	$('#promo-slider').carousel({
		interval: 3000
	});
	mobileMenu();
	//odliczanie
	$('.timer').countTo();
	var s = skrollr.init({forceHeight: false});
	if (document.documentElement.clientWidth < 480){
		$('.main-logo').html('<img src="images/logo_small.png" alt=""/>');
	}
});

//zmiana wielkości naglowka
$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height',28);
	} else {
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height',42);
	}
});
//mobilne menu
function mobileMenu() {
	$('#mobile-icon').bind('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').show();
	});
	$('#mobile-close').bind('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').hide();
	});
}