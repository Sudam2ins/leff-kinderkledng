$(function(){
	$mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content ');
	$mobileNav.append(jQuery('.menu .mynav > ul, .top-info-cta').clone());
	jQuery('.toggle a').click(function(e) {
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});
	jQuery('.body-inactive, .coff a').click(function(e) {
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();


	$('.owl-ll-contain').owlCarousel({
		loop:false,
		margin:50,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	})
})