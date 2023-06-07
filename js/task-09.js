const bcgColor = document.querySelector("body");
const bcgColorName = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

function getRandomHexColor() {
	let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	bcgColor.style.backgroundColor = color;
	bcgColorName.textContent = color;
}

btnColor.addEventListener("click", getRandomHexColor);
