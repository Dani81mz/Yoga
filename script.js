

const sidebar = document.querySelector(".sidebar")
const toggle = document.getElementById("toggle")

toggle.addEventListener("click",function(){
    sidebar.classList.toggle("show_sidebar")
})






window.onload = function(){
    new Splide(".MySplide",{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage:5,
        pagination:false,
        autoScroll:{
            speed:0.7
        },
    }).mount({ AutoScroll: window.splide.Extension.AutoScroll});
}