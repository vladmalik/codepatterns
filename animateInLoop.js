$(".selector").each(function(index) {
	(function(_this, i) {
		setTimeout(function() { _this.animate({opacity : 1}, 250) }, 250*index); // fade in the objects one by one
	})($(this), index);		
});
