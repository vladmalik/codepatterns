var message = "Sample Text";
var speed = 200;
var target = $("#field");

for(i=1; i<message.length+1; i++) {
  (function(a) {
    setTimeout(function() {
      target.val(message.substr(0,a));
    }, speed*a);
  })(i);
}
