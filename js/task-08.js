const formEl = document.querySelector(".login-form");

const dataUser = {};

const handlerBtn = e => {
	e.preventDefault();

	const email = e.currentTarget.elements.email;
	const password = e.currentTarget.elements.password;

	if (email.value === " " || password.value === "") {
		return alert("Please fill in all the fields!");
	} else {
		dataUser.email = email.value;
		dataUser.password = password.value;
	}

	console.log(dataUser);
	formEl.reset();
};

formEl.addEventListener("submit", handlerBtn);
