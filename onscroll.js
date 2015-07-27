$(function(){
	var vwoScrollY = $(document).scrollTop();
	var vwoWinSize = $(window).height();
	var vwoFooterY = $("#vwo").offset().top;
	var vwoFooterHeight = $("#vwo").height() + 0; // add margin and padding
	var vwoFooterThreshold = vwoFooterY + 0; //height of footer
	var vwoDocHeight = $(document).height();	
	
	$(window).on("resize", function() {
		vwoWinSize = $(this).height();
	});
	
	$(window).on("scroll", function() {
		vwoScrollY = $(this).scrollTop();
		if(vwoScrollY + vwoWinSize > vwoFooterThreshold) {

		
		}	
	});
});
