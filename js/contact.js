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

nameInput.addEventListener('input', checkName);

emailInput.addEventListener('input', checkEmail);

messageInput.addEventListener('input', checkMessage);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkName();
	checkEmail();
	checkMessage();
});
