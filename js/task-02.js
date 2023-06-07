const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const products = document.querySelector("#ingredients");

const elements = [];

const createNewElement = ingredients.map(ingredient => {
	const newElem = document.createElement("li");
	newElem.textContent = ingredient;
	newElem.classList.add("item-ingredients");
	elements.push(newElem);
});
products.append(...elements);
console.log(products);
