// This assumes elements are on the page and page is loaded. You should run this on windows.load or when the element is inserted on the page; Target specific smaller elements instead of large containers.

(function($) {

	$.fn.onView = function(callback, options) {
		
        var defaultOptions = $.extend({
            footerOffset : 0 // In case there is a fixed position footer covering some of the screen.
        }, options );		
		
		this.each(function() {
		
			var targetY = Math.ceil($(this).offset().top); // Position of element on the page
			var scrollY = $(document).scrollTop(); // Current scroll position
			var windowHeight = $(window).height(); // Window height
			var scrollSensitivity = 200; // Check every 200 ms
			var triggerTheshold = windowHeight*0.75; // Object has to scroll past the bottom 25% of the screen
			
			$(window).resize(function() {
				windowHeight = $(window).height();
				triggerTheshold = windowHeight*0.75;
			});			

			var atTargetY = setInterval(function() {
				scrollY = $(document).scrollTop(); // refresh scroll position
				if(scrollY + triggerTheshold - defaultOptions.footerOffset > targetY) {
					if(typeof(callback) == "function") callback();
					clearInterval(atTargetY);
				}
			}, scrollSensitivity);

		});

	}
	
})(jQuery);
