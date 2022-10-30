var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('main-header').style.top = '0';
	} else {
		document.getElementById('main-header').style.top = '-50%';
	}
	prevScrollpos = currentScrollPos;
};

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	overlay.classList.toggle('overlay-show');
	menu.classList.toggle('show-menu');
});
