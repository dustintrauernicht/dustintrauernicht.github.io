window.addEventListener("load", function() {

	var bars = document.getElementsByClassName("fa fa-bars")[0];
	var dropdown = document.getElementsByClassName("dropdown")[0];
	bars.addEventListener("click", function() {
		if (dropdown.style.display == "none") {
			dropdown.style.display = "flex"
		} else {
			dropdown.style.display = "none"
		}
	});

});