const inputValid = document.querySelector("#validation-input");

const handlerValid = () => {
	if (Number(inputValid.dataset.length) === inputValid.value.length) {
		inputValid.classList.add("valid");
	} else {
		inputValid.classList.add("invalid");
	}
};

inputValid.addEventListener("blur", handlerValid);
