const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const makeGalleryCard = ({ url, alt }) => `
  <li class="gallery-item">
  <a href="#" >
    <img src="${url}" alt="${alt}" width = 400 height = 400> 
  </a>
</li >`;

const markup = images.map(el => makeGalleryCard(el));

const gallery = document.querySelector(".gallery");

gallery.style.display = "flex";
gallery.style.listStyle = "none";

gallery.insertAdjacentHTML("beforeend", markup);
