function setCookie(name, value) {
	var date = new Date();
	var days=365;
	date.setTime(date.getTime() + (1000*60*60*24*days));
	document.cookie = name + "=" + value + "; expires=" + date.toGMTString() + ";path=/";
}

function getCookie(name) {
	name += '=';
    var cookies = document.cookie.split(';')
	for(var i=0; i < cookies.length; i++) {
      if (cookies[i].trim().indexOf(name)==0) return cookies[i].trim().substring(name.length);      
	}
}

function deleteCookie(name) {
	setCookie(name,"",-1);
}
