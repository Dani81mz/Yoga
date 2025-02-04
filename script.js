






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