function setImgCover(e) {
	e.each(function() {
		$(this).parent().css({
			'background-image': 'url("'+$(this).attr('src')+'")',
			'background-repeat': 'no-repeat',
			'background-position': 'center center',
			'background-size': 'cover'
		});
	});
}
function setImgContain(e) {
	e.each(function() {
		$(this).parent().css({
			'background-image': 'url("'+$(this).attr('src')+'")',
			'background-repeat': 'no-repeat',
			'background-position': 'center center',
			'background-size': 'contain'
		});
	});
}
function setRatio() {
	$('[data-ratio]').each(function() {
		var t = $(this).find('.scale');
		t.outerHeight(t.outerWidth()*$(this).attr('data-ratio'));
	});
}
$(function() {
	setImgCover($('.img-cover'));
	setImgContain($('.img-contain'));
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:999px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	$('.teachers__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		adaptiveHeight: true
	});
	$('.mission__partners').each(function() {
		$(this).slick({
			slidesToShow: $(this).find('.mission__partners--item').size()-1,
			arrows: true,
			dots: false,
			infinite: true,
			cssEase: 'ease',
			speed: 500,
			variableWidth: true
		});
	});

	$('.stats__grid').slick({
		slidesToShow: 5,
		arrows: true,
		dots: false,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	
	var counterOn = false;
	$(document).on('scroll', function() {
		$('.stats').each(function() {
			if ( $(document).scrollTop() > $(this).offset().top-$(window).height() && !counterOn ) {
				$(this).find('.counter-up').counterUp({
					delay: 10,
					time: 1000
				});
				counterOn = true;
			}
		});
		
	});
	$(document).trigger('scroll');
	
	function menuOpen() {
		$('.menu-open').addClass('is-active');
		$('.mobile-menu').addClass('is-opened');
		$('body').addClass('is-locked');
	}
	function menuClose() {
		$('.menu-open').removeClass('is-active');
		$('.mobile-menu').removeClass('is-opened');
		$('body').removeClass('is-locked');
	}
	function unlockBody() {
		$('body').removeClass('is-locked');
	}
	$(document).on('click', '.menu-open', function() {
		if ( !$(this).hasClass('is-active') ) {
			menuOpen();
		} else {
			menuClose();
		}
	});
	$(document).on('click', function(e) {
		if ( !$(e.target).closest('.menu-open').length && !$(e.target).closest('.mobile-menu').length ) {
			menuClose();
		}
	});

	$('.teachers-e__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: false,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.teachers-p__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		dots: false,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.gallery-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.course-slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: true,
		infinite: true,
		cssEase: 'ease',
		speed: 500,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 999,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 639,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.course-illusion__slider').slick({
		slidesToShow: 1,
		arrows: true,
		dots: false,
		infinite: true,
		cssEase: 'ease',
		speed: 500
	});

	$('.docs__slider').slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,
		dots: true,
		infinite: true,
		cssEase: 'ease',
		speed: 500
	});

	function startApp() {
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				$('.panel').append('<span class="menu-open"><i></i></span>');
				$('body').append('<div class="mobile-menu"></div>');
				$('.nav').detach().appendTo($('.mobile-menu'));
				$('.panel__nav').detach().appendTo($('.mobile-menu'));
				$('.header--phone').detach().appendTo('.panel');
			} else {
				$('.panel__nav').detach().prependTo($('.panel'));
				$('.nav').detach().insertAfter($('.header'));
				$('.menu-open, .mobile-menu').remove();
				$('.header--phone').detach().insertBefore($('.header--request'));
			}
			if ( $('body').hasClass('is-locked') ) {
				unlockBody();
			}
		}
		setRatio();
	}
	startApp();
	var lastWidth = $(window).width();
	$(window).on('resize', _.debounce(function() {
		if ( $(window).width() != lastWidth ) {
			startApp();
			lastWidth = $(window).width();
		}
	}, 100));
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('is-active');
		var t = $('[data-target="'+$(this).attr('data-open')+'"]');
		t.siblings('[data-target]').removeClass('is-opened is-active');
		$('.fade-bg').addClass('is-opened');
		t.addClass('is-opened');
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( !isMobile ) {
			var diff = 30;
		} else {
			var diff = 20;
		}
		if ( h < $(window).scrollTop()+(diff*2) ) {
			h = $(window).scrollTop()+diff;
		}
		t.css({
			'top': h+'px'
		}).addClass('is-active').siblings('[data-target]').removeClass('is-active');
	});
	$('[data-target] .modal--close, .fade-bg').on('click', function(e) {
		e.preventDefault();
		$('[data-target], .fade-bg').removeClass('is-opened');
		$('[data-open]').removeClass('is-active');
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});