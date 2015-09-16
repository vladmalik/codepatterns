	function getCookie(name) {
		name += '=';
		var cookies = document.cookie.split(';')
		for(var i=0; i < cookies.length; i++) {
			if (cookies[i].trim().indexOf(name)==0) return cookies[i].trim().substring(name.length);
		}
		return false;
	}
	
	function setCookie(name, value) {
		var date = new Date();
		var days=365;
		date.setTime(date.getTime() + (1000*60*60*24*45)); // Expires in 45 days
		document.cookie = name + "=" + value + "; expires=" + date.toGMTString() + ";path=/";
	}		
	
	var maxLength = 6;
	var list = getCookie("list");
	if(!list) {
		setCookie("list", "[]");
	}
	if(list.indexOf("{{EVENT_NAME}}") == -1) { // if cookie doesn't already contains this event
		var listJSON = JSON.parse(list);
		var id = "123";
		var property1 = "Red";
		listJSON.push({
			"id":id,
			"property1":property1
		});
		if(listJSON.length > maxLength) listJSON.shift();
		setCookie("carthistory", JSON.stringify(listJSON));
	}
