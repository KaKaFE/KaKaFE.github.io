let planpage = document.querySelector(".planpage");

window.addEventListener('scroll', function () {
	if (pageYOffset > 112) planpage.classList.add("planpage-scroll-middle");
	if (pageYOffset < 112) planpage.classList.remove("planpage-scroll-middle");
	if (pageYOffset > 465) planpage.classList.add("planpage-scroll-bottom");
	if (pageYOffset < 465) planpage.classList.remove("planpage-scroll-bottom");
});