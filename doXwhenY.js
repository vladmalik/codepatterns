// Supports multiple targets

var targetY = []; // List targets in array
var isActivated = []; // Leave blank
var scrollY;
var windowHeight = $(window).height();
var targetSensitivity = 300; // Target has to scroll 300px into view
var scrollSensitivity = 200; // Check every 200 ms

$(window).load(function () {
	targetY[0] = Math.ceil($(".selector").offset().top); // Get rendered position of first target
});	

var atTargetY = setInterval(function() {
	scrollY = $(document).scrollTop(); // refresh scroll position

	// Listen for first target (repeat this block with target[1]... for other targets)
	if(	targetY[0]!=0 && scrollY + windowHeight-targetSensitivity > 	targetY[0]) {
	  // doStuff();
	  isActivated[0]=1;
	}
	
	// stop listening once all goals reached
	if(isActivated.length == targetY.length) clearInterval(atTargetY);
}, scrollSensitivity);
