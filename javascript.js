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
	// alert("Screen Resolution: " + window.screen.availWidth + " x " + window.screen.availHeight)
	// 1600 x 856
	// const button1 = document.getElementById("button-about");
	// const button2 = document.getElementById("button-skills");
	// const button3 = document.getElementById("button-work");
	// const button4 = document.getElementById("button-results");
	// const button5 = document.getElementById("button-contact");
	// const target1 = document.getElementById("section-1").getBoundingClientRect().top + window.pageYOffset - 40;
	// const target2 = document.getElementById("section-2").getBoundingClientRect().top + window.pageYOffset - 40;
	// const target3 = document.getElementById("section-3").getBoundingClientRect().top + window.pageYOffset - 40;
	// const target4 = document.getElementById("section-4").getBoundingClientRect().top + window.pageYOffset - 40;
	// const target5 = document.getElementById("section-5").getBoundingClientRect().top + window.pageYOffset - 40;
	const target1 = document.getElementById("section-1");
	const target2 = document.getElementById("section-2");
	const target3 = document.getElementById("section-3");
	const target4 = document.getElementById("section-4");
	const target5 = document.getElementById("section-5");

	function scroll1() {
		const target1 = document.getElementById("section-1").getBoundingClientRect().top + window.pageYOffset - 40;
		window.scrollTo({ top: target1, behavior: "smooth" });
		alert("alert 1");
	}

	function scroll2() {
		const target1 = document.getElementById("section-2").getBoundingClientRect().top + window.pageYOffset - 40;
		window.scrollTo({ top: target2, behavior: "smooth" });
		alert("alert 2");
	}
	// target2.scrollIntoView({ behavior: "smooth" });
	// setTimeout(function () {
	// target1.scrollIntoView({ behavior: "smooth" });
	// }, 2000);
	// function jumpTo(button_id) {
	// switch (button_id) {
	// case 'button-about':
	// target1.scrollIntoView({ behavior: "smooth" });
	// window.scrollTo({ top: target1, behavior: "smooth" });
	// console.log("Scrolling to " + target1);
	// break;
	// case 'button-skills':
	// target2.scrollIntoView({ behavior: "smooth" });
	// window.scrollTo({ top: target2, behavior: "smooth" });
	// console.log("Scrolling to " + target2);
	// break;
	// case 'button-work':
	// target3.scrollIntoView({ behavior: "smooth" });
	// window.scrollTo({ top: target3, behavior: "smooth" });
	// console.log("Scrolling to " + target3);
	// break;
	// case 'button-results':
	// target4.scrollIntoView({ behavior: "smooth" });
	// window.scrollTo({ top: target4, behavior: "smooth" });
	// console.log("Scrolling to " + target4);
	// break;
	// case 'button-contact':
	// target5.scrollIntoView({ behavior: "smooth" });
	// window.scrollTo({ top: target5, behavior: "smooth" });
	// console.log("Scrolling to " + target5);
	// break;
	// }
	// }
} catch (e) {
	console.log("shits bad");
}