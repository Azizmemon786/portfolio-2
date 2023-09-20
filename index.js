AOS.init();

let navToggle = document.querySelector(".nav-toggle");
let sidebar = document.querySelector(".sidebar");

navToggle.addEventListener("click", function () {
    if (navToggle.firstElementChild.classList.contains("ri-menu-4-line")) {
        navToggle.firstElementChild.classList.replace("ri-menu-4-line", "ri-close-line");
    }
    else {
        navToggle.firstElementChild.classList.replace("ri-close-line", "ri-menu-4-line");
    }

    sidebar.classList.toggle("show_sidebar");
})

var icons = document.getElementById("icon");

icons.onclick = function(){
document.body.classList.toggle("dark_mode");
if(document.body.classList.contains("dark_mode")){
    icons.src = "img/sun.png";
}
else{
    icons.src = "img/moon.png"
}
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const spans = document.querySelectorAll('.prgress-bar span');

spans.forEach((span) =>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});