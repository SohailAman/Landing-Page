// Navbar Top Fixed

// Function
window.onscroll = function() { myFunction() };
let navbar = document.getElementById('Navbar');
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// 

// Swiper JS

const swiper = new Swiper(".mySwiper", {

    // Autoplay
    autoplay: {
        delay: 1100,
        disableOnInteraction: false,
    },
    // loop
    loop: true,
    // controls
    mousewheel: true,
    keyboard: true,
});

// 

// Swiper JS 2

const swiper2 = new Swiper(".mySwiper2", {

    // Effect
    effect: "fade",

    // Autoplay
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //  navigation 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // loop
    loop: true,
    mousewheel: true,
    keyboard: true,
});

// 
//.....................//


//... Back to top

let toTop = document.getElementById('scroll');

// On Scroll Function
window.onscroll = () => {
    // local var
    let up = window.scrollY;

    if (up > 150) {
        toTop.classList.remove('hide');
        toTop.classList.add('show');
    } else {

        toTop.classList.add('hide');
        toTop.classList.remove('show');
    }
}

// ..............................//