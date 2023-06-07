const allCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allCategories.length}`);

const headerAndCount = allCategories.forEach(listElement => {
	const categoryName = listElement.firstElementChild.textContent;
	console.log(`Category: ${categoryName}`);
	const categoryElements = listElement.lastElementChild.childElementCount;
	console.log(`Elements: ${categoryElements}`);
});
