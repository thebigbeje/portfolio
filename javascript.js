try {
	const width = Math.round(screen.width * .99);
	const height = Math.round(screen.height * .99);
	var aspectRatio = width / height;
	var siteVariant = 0; //0=portrait, 1=landscape, 2=square
	// const navbar = document.getElementById("navbar");
	// const main = document.getElementById("main");
	// navbar.style.width = 0.09 * width + "px"
	// main.style.width = 0.91 * width + "px"
	// alert(main.offsetWidth);
	// alert ("width=" + width + "  height=" + height);
	// if (aspectRatio > 0.75 && aspectRatio < 1.3)
	// 	siteVariant = 2;
	// else if (aspectRatio >= 1.3)
	// 	siteVariant = 1;
	// else
	// 	siteVariant = 0;
	// switch (siteVariant) {
	// case 0:
	// 	break;
	// case 1:
	// 	break;
	// case 2:
	// 	break;
	// }
	alert("Screen Resolution: " + window.screen.availWidth + " x " + window.screen.availHeight)
	// 1600 x 856
} catch (e) {
	console.log("shits bad");
}