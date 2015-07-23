		function shake(elem, n, dist, time) {
			elem.css({
				"position" : "relative"
			});
			for(i=0; i<n; i++) {
				elem.animate({ left : dist }, time);
				elem.animate({ left : -dist }, time);
				elem.animate({ left : 0 }, time/2);
			}
		}
