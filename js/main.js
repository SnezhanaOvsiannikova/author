$(document).ready(function(){
	var slider = $('#slider');
	var anchors = $('.navigation a[href^="#"]');

	slider.on('init', function() {
		setTimeout(function() {
			$('.img-scale').imageScale({
				rescaleOnResize: true,
				align: 'center'
			});
		}, 100);
	});
	slider.slick({
		cssEase: 'linear',
		dots: false,
		fade: true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 300,
		swipeToSlide: true,
		nextArrow: $('.banner button.right'),
		prevArrow: $('.banner button.left'),
	});

  	
	$('#active-elem').hover(
        function(){ 
            $(this).find('.btn-gray').toggleClass('.active');
        }
    );

	(function () {
		var activeElem = $('.highlight-box .btn-gray');
		
		activeElem.on('mouseenter', function() {
			var parentElem = $(this).closest('.highlight-box');

			parentElem.addClass('active');

			$(this).one('mouseleave', function() {
				parentElem.removeClass('active');
			});
		});
	}());
	anchors.click(function(e){
		var jThis = $(this); 
        var hash = jThis.attr('href');
        var target;
        var navElems = $('.navigation li')

        e.preventDefault();

        if (hash === '#') { return; }

        navElems.removeClass('active');
        jThis.closest('li').addClass('active');
    	target = $(hash);
 
        history.pushState('', document.title, window.location.pathname);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500, function(){
            //window.location.hash = hash;
    	});
	});
	(function () {

		var menuEl = $('#menu');

		 $(window).scroll(function(){

            if ( $(this).scrollTop() > 100 && menuEl.hasClass('navigation') ){
                menuEl.addClass('fixed-menu');
            } else if($(this).scrollTop() <= 100 && menuEl.hasClass('fixed-menu')) {
                menuEl.removeClass('fixed-menu');
            }
        });


	}());
});


