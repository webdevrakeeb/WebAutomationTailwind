(function($){
	$(document).ready(function() {	

        jQuery('.humberger-icon svg').click(function(){
            jQuery('.mobile-menu-bar').addClass('show-sidebar')
        })

        jQuery('.close-icon svg').click(function(){
            jQuery('.mobile-menu-bar').removeClass('show-sidebar');
        })

        jQuery('.drp-item').click(function(){
            jQuery('.mobile-menu-bar').removeClass('show-sidebar');
        })

        jQuery('.drp-btn').click(function(){
            jQuery('.drp-item').slideUp();
            jQuery(this).find('.drp-item').slideDown();
        })

        $('.slider').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            cssEase: 'linear',
            infinite: true,
            arrows: false,
            pauseOnHover: false,
            responsive: [
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 6
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
        });







	});
})(jQuery);