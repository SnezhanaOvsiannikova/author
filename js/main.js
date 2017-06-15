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
});
function validateCommentsFunc(textarea) {
	 if (textarea.value.length < 20) {
	  textarea.setCustomValidity("Give a more detailed answer, please...");   
   }
   else {
	  textarea.setCustomValidity("");
   }

}