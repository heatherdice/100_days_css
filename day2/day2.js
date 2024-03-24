// Day 2 animations

// select DOM elements
const hamburger = document.querySelectorAll(".hamburger");

let hamburgerClicked = false;
hamburger.addEventListener('click', toggleX);

function toggleX() {
	if (!hamburgerClicked) {
		hamburger.classList.add('clicked');
		hamburgerClicked = true;
	} else {
		hamburger.classList.remove('clicked');
		hamburgerClicked = false;
	}
}