(function($) {
	'use strict';
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Preloader JS
	$(function() {
		$('body').addClass('loaded');
	});

	// Nice Select JS
	$('select').niceSelect();
	
	// Header Sticky JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >150){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Hero Slider Wrap
	$('.hero-slider-wrap').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
	});

	// Testimonial Slider Wrap
	$('.testimonial-wrap').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		mouseDrag: true,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
	});

	// Latest Trailer Wrap
	$('.latest-trailer-wrap').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items:1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 2,
			},
			992:{
				items: 2,
			},
			1200:{
				items: 2,
			}
		}
	});

	// Team Wrap
	$('.team-wrap').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			414:{
				items: 2,
			},
			576:{
				items: 2,
			},
			768:{
				items: 3,
			},
			992:{
				items: 4,
			},
			1200:{
				items: 5,
			}
		}
	});

	// Partner Wrap
	$('.partner-wrap').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 2,
			},
			414:{
				items: 3,
			},
			576:{
				items: 3,
			},
			768:{
				items: 4,
			},
			992:{
				items: 6,
			},
			1200:{
				items: 6,
			}
		}
	});

	// Products Slider Wrap
	$('.products-slider-wrap').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>",
		],
	});

	// Latest Trailer Wrap Two
	$('.latest-trailer-wrap-two').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 2,
			},
			768:{
				items: 3,
			},
			992:{
				items: 4,
			},
			1200:{
				items: 4,
			}
		}
	});

	// Testimonial Slider Wrap Two
	$('.testimonial-wrap-two').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items: 1,
			},
			576:{
				items: 1,
			},
			768:{
				items: 1,
			},
			992:{
				items: 2,
			},
			1200:{
				items: 2,
			}
		}
	});

	// Testimonial Slider Wrap Three
	$('.testimonial-wrap-three').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: true,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
	});

	// Hero Slider Wrap Two
	$('.hero-slider-wrap-two').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>",
		],
	});

	// Go to Top JS
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	// Products Slider Wrap Three
	$('.products-slider-wrap-three').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		mouseDrag: false,
		thumbs: true,
		thumbsPrerendered: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		animateOut: "slideOutDown",
        animateIn: "slideInDown",
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>",
		],
	});

	// Sidebar Modal JS
	$(".burger-menu").on('click',  function() {
		$('.sidebar-modal').toggleClass('active');
	});
	$(".sidebar-modal-close-btn").on('click',  function() {
		$('.sidebar-modal').removeClass('active');
	});

	// FAQ Accordion JS
	$('.accordion').find('.accordion-title').on('click', function(){
		// Adds Active Class
		$(this).toggleClass('active');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordion-content').not($(this).next()).slideUp('fast');
		// Removes Active Class From Other Titles
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2021 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);
		
	// Popup Video JS
	$('.popup-youtube, .popup-vimeo').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Popup Image JS
	$('.popup-image').magnificPopup({
		disableOn: 300,
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Tabs JS
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter, #validator-newsletter-2").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp JS
	$(".newsletter-form").ajaxChimp({
		url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Newsletter Modal
	$(document).ready(function(){       
		$('#exampleModal').modal('show');
	}); 

	// Odometer 
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// MixItUp Shorting
	$('.shorting').mixItUp();
})(jQuery);
