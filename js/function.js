(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Top Menu */
	$(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 74
			}, 800);
			return false;
		}
	});
	
	/* Brand slider */
	var swiper = new Swiper('.brand-slider',{
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		speed: 3000,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 0,
		freeMode: true,          
  		freeModeMomentum: false,
		breakpoints: {
			991: {
				slidesPerView: 2
			}
		},
		allowTouchMove: false,
    });

	// Get the slider container
	var sliderContainer = document.querySelector('.brand-slider');

	// Pause on mouse enter
	sliderContainer.addEventListener('mouseenter', function() {
		sliderContainer.swiper.autoplay.stop();
	});

	// Resume on mouse leave
	sliderContainer.addEventListener('mouseleave', function() {
		sliderContainer.swiper.autoplay.start();
	});

	/* Experience slider */
	var swiper = new Swiper('.experience-slider',{
		autoplay: {
			delay: 2500,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.experience-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoHeight: true,
    });
	
	// Get the slider container
	var expContainer = document.querySelector('.experience-slider');

	// Pause on mouse enter
	expContainer.addEventListener('mouseenter', function() {
		expContainer.swiper.autoplay.stop();
	});

	// Resume on mouse leave
	expContainer.addEventListener('mouseleave', function() {
		expContainer.swiper.autoplay.start();
	});

	/* Education slider */
	var swiper = new Swiper('.education-slider',{
		autoplay: {
			delay: 2500,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.education-pagination',
			type: 'bullets',
			clickable: true,
		},
    });

	var eduContainer = document.querySelector('.education-slider');

	// Pause on mouse enter
	eduContainer.addEventListener('mouseenter', function() {
		eduContainer.swiper.autoplay.stop();
	});

	// Resume on mouse leave
	eduContainer.addEventListener('mouseleave', function() {
		eduContainer.swiper.autoplay.start();
	});
	
	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
	/* Partner slider */
	var swiper = new Swiper('.partner-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			},
			
			991: {
				slidesPerView: 3
			}
		}
    });
	
	/*Portfolio (filtering) */
	/* Init Isotope */
	var $portfolio = $(".portfolio-boxes").isotope({
		itemSelector: ".portfolio-box",
		layoutMode: "masonry"
	});

	/* Set initial filtering */
	$window.load(function(){
		$portfolio.isotope({ filter: "*" });
	});

	/* Filter items on click */
	var $portfolionav=$(".portfolio-nav li a");
		$portfolionav.on('click', function (e) { 
	
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		}); 
		
		$portfolionav.removeClass("active-portfolio"); 
		$(this).addClass("active-portfolio");
		e.preventDefault();
	}); 
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});
	
	
	/* Popup video */
	var $popupvideo = $(".popup-video"); 
	if($popupvideo.length){
		$popupvideo.magnificPopup({
			type: 'iframe',
			preloader: true,
		});
	}
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 10, time: 1000 });
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);