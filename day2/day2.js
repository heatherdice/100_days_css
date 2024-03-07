// Day 2 animations

// select DOM elements
const hamburger = document.querySelector(".hamburger");

// set initial state
let hamburgerClicked = false;
hamburger.addEventListener("click", toggleX);

// toggle function
function toggleX() {
	if (!hamburgerClicked) {
		hamburger.classList.add("close");
		hamburger.classList.add("cross");
		hamburgerClicked = true;
	} else {
		hamburger.classList.remove("close");
		hamburger.classList.remove("cross");
		hamburgerClicked = false;
	}
}