// Day 2 animations

// select DOM elements
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", ()  => {
	menu.classList.remove("static");
	menu.classList.toggle("animation");
})