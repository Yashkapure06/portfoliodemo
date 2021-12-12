(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // // PROJECT CAROUSEL
    // $('.owl-carousel').owlCarousel({
    // 	items: 1,
	//     loop:true,
	//     margin:10,
	//     nav:true
	// });


    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
