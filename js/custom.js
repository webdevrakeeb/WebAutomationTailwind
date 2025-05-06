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







	});
})(jQuery);