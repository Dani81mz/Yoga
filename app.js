const hamburger = document.querySelector("#hamburger");
const enlaces = document.querySelector("#nav_links")

hamburger.addEventListener("click", () => {
    enlaces.classList.toggle("show")
});