// Day 2 animations

// select DOM elements
const menu = document.querySelectorAll(".hamburger");

let hamburgerClicked = false;

menu.forEach(hamburger => {
	hamburger.addEventListener('click', toggleX);
})

function toggleX() {
	if (!hamburgerClicked) {
		this.classList.add('clicked');
		hamburgerClicked = true;
	} else {
		this.classList.remove('clicked');
		hamburgerClicked = false;
	}
}