// Day 2 animations

// add event listener when content loads
document.addEventListener("DOMContentLoaded", () => {
	// select DOM elements
	const menu = document.querySelector(".hamburger");

	// onclick, remove static class & add animation class; if animation class is already present, remove it
	menu.addEventListener("click", ()  => {
		menu.classList.remove("static");
		menu.classList.toggle("animation");
	});
});
