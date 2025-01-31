const hamburger = document.querySelector("#hamburger")
const enlaces = document.querySelector("#nav_links")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show")
})