//sliders autoplay
	//intro slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})

//make section height of window
/*	$(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		});
	});
*/
//custom scrollbar
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);

//smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -61
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});

	$(document).ready(function(){
		//Disable Right Click On Images
		$('img').bind('contextmenu', function(e) {
			return false;
		});
		
		// plugin carousel
		$('.carousel').carousel({
			interval: false
		});

	$('#navbar').affix({
		offset: {
			top: 200
		}
	});	

	});
/* product sorting */
// isotope
	$(document).ready(function(){
	    $('.masonry').isotope({
	        // options
	        itemSelector: '.mas'
	    });

	    // isotope
	    $('.gallery').isotope({
	        // options
	        itemSelector: '.items'
	    });

	    var $gallery = $('.gallery').isotope({
	        // options
	    });

	    // filter items on button click
	    $('.filtering').on('click', 'span', function () {

	        var filterValue = $(this).attr('data-filter');

	        $gallery.isotope({filter: filterValue});

	    });

	    $('.filtering').on('click', 'span', function () {

	        $(this).addClass('active').siblings().removeClass('active');

	    });

	});

// end product sorting

    /*slider*/
    // Slider 
$(document).ready(function () {

    var owl = $('.header .owl-carousel');


    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500
    });

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInLeft');
        $('h2').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

    //testimonial slider
    $('.testimonial_slide').owlCarousel({
        loop:true,
        autoplay:3000,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        smartSpeed: 4000,
        nav:false,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    //press converate slider
        $( '.owl-carousel' ).owlCarousel({
        items: 6,
        nav: true,
        dots: false,
        mouseDrag: true,
        responsiveClass: true,
            responsive: {
                0:{
                  items: 1
                },
                480:{
                  items: 3
                },
                769:{
                  items: 6
                }
            }
        });

        //Background image
        $( '.img-wrap' ).each( function(){
            var img = $( this ).find( 'img' );
            var src = img.attr( 'src' );
            $( this ).css( 'background-image', 'url( '+ src +' )' );
        });

});

// end slider


// back to top js
if ($('#back_to_top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back_to_top').addClass('on');
            } else {
                $('#back_to_top').removeClass('on');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back_to_top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
// end back to top