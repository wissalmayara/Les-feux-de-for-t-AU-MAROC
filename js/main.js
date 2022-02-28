$(document).ready(function() {
	
		var map = L.map('map').setView([29, -5], 5);

	    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	    }).addTo(map); {

        $.getJSON("data/Covid.js").done(function(data) {
			console.log(data);
	 	}).fail(function() { alert("There has been a problem loading the data.")});	
}
}
);
	