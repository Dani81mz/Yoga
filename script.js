$(".readmore_btn").on("click", function(){
    $(this).parent().toggleClass("showContent");

    var replaceText = $(this).parent().hasClass("showContent") ? "ver menos" : "ver más";
    $(this).text(replaceText);

});

function toggleMobileMenu(menu) {
    menu.classList.toggle(open);
}

let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click", toggleText);

function toggleText() {
    hideText.classList.toggle("show");
}



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