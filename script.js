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

// CONTACT FORM

const form = document.getElementById('contact--form');
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const showError = (input, message) => {
	const errorContainer = input.nextElementSibling;
	const errorMsg = errorContainer.querySelector('.error-msg');

	errorContainer.classList.add('active');
	errorMsg.innerText = message;
};

const removeError = (input) => {
	const errorContainer = input.nextElementSibling;

	errorContainer.classList.remove('active');
};

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

function checkName() {
	if (nameInput.value === '') {
		showError(nameInput, `Can't be empty`);
	} else {
		removeError(nameInput);
	}
}

function checkEmail() {
	if (emailInput.value === '') {
		showError(emailInput, `Can't be empty`);
	} else if (!validateEmail(emailInput.value)) {
		showError(emailInput, 'Please use a valid email address');
	} else {
		removeError(emailInput);
	}
}

function checkMessage() {
	if (messageInput.value === '') {
		showError(messageInput, `Can't be empty`);
	} else {
		removeError(messageInput);
	}
}

if (nameInput) {
	nameInput.addEventListener('input', checkName);
}

if (emailInput) {
	emailInput.addEventListener('input', checkEmail);
}

if (messageInput) {
	messageInput.addEventListener('input', checkMessage);
}

if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		checkName();
		checkEmail();
		checkMessage();
	});
}
