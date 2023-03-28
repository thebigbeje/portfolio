try {
	const width = Math.round(screen.width * .99);
	const height = Math.round(screen.height * .99);
	var aspectRatio = width / height;
	var siteVariant = 0;	//0=portrait, 1=landscape, 2=square
	const navbar = document.getElementById("navbar");
	const main = document.getElementById("main");
	navbar.style.width = 0.09 * width + "px"
	// alert(main.offsetWidth);
	// alert ("width=" + width + "  height=" + height);
	if (aspectRatio > 0.75 && aspectRatio < 1.3)
		siteVariant = 2;
	else if (aspectRatio >= 1.3)
		siteVariant = 1;
	else
		siteVariant = 0;
	switch (siteVariant) {
		case 0:
	
			break;
		case 1:
	
			break;
		case 2:
	
			break;
	}
	// alert("Screen Resolution: " + window.screen.availWidth + " x " + window.screen.availHeight)
	// 1600 x 856
	const button1 = document.getElementById("button-mission");
	const button2 = document.getElementById("button-portfolio");
	const button3 = document.getElementById("button-contact");

	const target1 = document.getElementById("section-1");
	const target2 = document.getElementById("section-2");
	const target3 = document.getElementById("section-3");

	button1.addEventListener("click", function() {
		// alert("merge1")
		target1.scrollIntoView({ behavior: 'smooth', block: 'end'});
	});

	button2.addEventListener("click", function() {
		// alert("merge2")
		target2.scrollIntoView({ behavior: 'smooth', block: 'end'});
	});

	button3.addEventListener("click", function() {
		// alert("merge3")
		target3.scrollIntoView({ behavior: 'smooth', block: 'end'});
	});

	$ (window).scroll (
		function() {
			var h = document.documentElement.clientHeight;
			var scroll = $ (window).scrollTop();
			if (scroll >= h * 0.2)
				document.getElementById("line-1").classList.add("hide-line");
			else if (scroll < h * 0.1)
				document.getElementById("line-1").classList.remove("hide-line");
			if (scroll < h * 0.2)
				document.getElementById("rodevila-logo-1").classList.remove("animated-glow");
			if (scroll >= h * 0.7) {
				document.getElementById("text-1").classList.remove("hide-text");
				document.getElementById("rodevila-logo-1").classList.add("animated-glow");
			}
			else if (scroll < h * 0.9)
				document.getElementById("text-1").classList.add("hide-text");
			if (scroll >= h * 0.9)
				document.getElementById("text-2").classList.remove("hide-text");
			else if (scroll < h * 1.1)
				document.getElementById("text-2").classList.add("hide-text");
			if (scroll >= h * 1.4);
				// document.getElementById("text").classList.remove("hide-text");
			else if (scroll < h * 1.2);
				// document.getElementById("text").classList.add("hide-text");
		}
	);
} catch (e) {
	console.log ("shits bad");
}