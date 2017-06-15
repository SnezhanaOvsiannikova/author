$(document).ready(function(){
	$('#slider').slick({
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
  	$('.img-scale').imageScale({
		rescaleOnResize: true,
		align: 'center'
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
	$('a[href^="#"]').click(function(e){
        var hash = $(this).attr('href');
        var target;

        e.preventDefault();

        if (hash === '#') { return; }

    	target = $(hash);
 
        history.pushState('', document.title, window.location.pathname);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1500, function(){
            //window.location.hash = hash;
    	});
	});
});

