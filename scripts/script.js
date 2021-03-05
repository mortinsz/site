$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 2,
		autoplay: true, 
		autoplaySpeed: 2000,
		infinite: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive:[
		{
			breakpoint: 980,
			settings:{
				slidesToShow: 1,
			}
		}
		]
	});
})
