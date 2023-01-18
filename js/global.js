const menuIcon = document.querySelector(".nav .menu-icon");
const closeIcon = document.querySelector(".nav .close-icon");
const nav = document.querySelector(".landing nav.nav")
const ul = document.querySelector(".nav .nav-items")

menuIcon.addEventListener("click", (e) => {
	nav.classList.add("shown");
	ul.style.top = "0";
	ul.style.opacity = "1"


})
closeIcon.addEventListener("click", (e) => {
	nav.classList.remove("shown");
	ul.style.top = "-100vh";
	ul.style.opacity = "0"



})