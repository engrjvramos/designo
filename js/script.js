'use strict';

//*** MOBILE NAV TOGGLE ***//
const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItems = document.querySelectorAll('.nav-items a');
const overlay = document.querySelector('.nav-overlay');
const crewPagination = document.querySelectorAll('.crew-pagination a');

const openMobileNav = () => {
	primaryNav.setAttribute('data-visible', true);
	overlay.setAttribute('data-visible', true);
	navToggle.setAttribute('aria-expanded', true);
	document.body.style.overflow = 'hidden';
};

const closeMobileNav = () => {
	primaryNav.setAttribute('data-visible', false);
	overlay.setAttribute('data-visible', false);
	navToggle.setAttribute('aria-expanded', false);
	document.body.style.overflow = 'auto';
};

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');

	if (visibility === 'false') {
		openMobileNav();
	} else if (visibility === 'true') {
		closeMobileNav();
	}
});

navItems.forEach((navItem) => {
	navItem.addEventListener('click', () => {
		closeMobileNav();
	});
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('nav-overlay')) {
		closeMobileNav();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const visibility = primaryNav.getAttribute('data-visible');
		if (visibility === 'true') {
			closeMobileNav();
		}
	}
});

//*** DISABLE ANIMATIONS WHILE RESIZING SCREEN ***//
let resizeTimer;
window.addEventListener('resize', () => {
	document.body.classList.add('resize-animation-stopper');
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(() => {
		document.body.classList.remove('resize-animation-stopper');
	}, 400);
});

// BARBA
// barba.init({
// 	transitions: [
// 		{
// 			name: 'opacity-transition',
// 			leave(data) {
// 				return gsap.to(data.current.container, {
// 					opacity: 0,
// 				});
// 			},
// 			enter(data) {
// 				return gsap.from(data.next.container, {
// 					opacity: 0,
// 				});
// 			},
// 		},
// 	],
// });
