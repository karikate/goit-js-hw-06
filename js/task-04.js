const btnDecrement = document.querySelector("button[data-action='decrement']");
const btnIncrement = document.querySelector("button[data-action='increment']");
const counterValue = document.querySelector("#value");

let value = 0;

const handleBtnDec = () => {
	value -= 1;
	counterValue.textContent = value;
};

const handleBtnInc = () => {
	value += 1;
	counterValue.textContent = value;
};

btnDecrement.addEventListener("click", handleBtnDec);
btnIncrement.addEventListener("click", handleBtnInc);
