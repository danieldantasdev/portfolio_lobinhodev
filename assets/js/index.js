/* ==================== Dark Mode ==================== */
let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.l-header .l-nav')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun')

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

/* ==================== Mostrar menu ==================== */
var menuHamburguer = document.querySelector('#menu-btn')
menuHamburguer.addEventListener('click', () => {
    var nav = document
        .querySelector('.l-nav__container')
        .classList.toggle('show-menu')
})

/* ==================== Aumentar fonte do site ==================== */
var elementBody = document.querySelector('html')
var elementBtnIncreaseFont = document.getElementById('increase-btn')
var elementBtnDecreaseFont = document.getElementById('decrease-btn')
// Padrão de tamanho, equivale a 100% do valor definido no Body
var fontSize = 62.5
// Valor de incremento ou decremento, equivale a 10% do valor do Body
var increaseDecrease = 10

// Evento de click para aumentar a fonte
elementBtnIncreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize + increaseDecrease
    elementBody.style.fontSize = fontSize + '%'
})

// Evento de click para diminuir a fonte
elementBtnDecreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize - increaseDecrease
    elementBody.style.fontSize = fontSize + '%'
})

/* ==================== Scroll-to-top ==================== */
const backToTopButton = document.querySelector('.scroll-to-top')

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', backToTop)

// var offset = 1000
// var duration = 100
// jQuery(window).on('scroll', function () {
//     if (jQuery(this).scrollTop() > offset) {
//         jQuery('.scroll-to-top').addClass('show')
//     } else {
//         jQuery('.scroll-to-top').removeClass('show')
//     }
// })
// jQuery('.scroll-to-top').on('click', function (event) {
//     event.preventDefault()
//     jQuery('html, body').animate({ scrollTop: 0 }, duration)
//     return false
// })

// function scrollUp() {
//     const scrollUp = document.querySelector('.scroll-to-top')
//     // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
//     if (this.scrollY >= 560) scrollUp.classList.add('show')
//     else scrollUp.classList.remove('show')
// }
// window.addEventListener('scroll', scrollUp)

/* ==================== Contact ==================== */
$('button').click(function () {
    $('button').toggleClass('active')
    $('.title').toggleClass('active')
    $('nav').toggleClass('active')
})

/* ==================== ScrollReveal ==================== */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #about .l-section__about-card,
    #skills .l-section__skill-card-item,
    #interesting .l-section__interesting-card-content,
    #contact 
    `,
    { interval: 200 }
)

/* ==================== Slider swiper ==================== */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 4,
            setWrapperSize: true
        }
    }
})

/* ==================== Load ==================== */
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 5000)
}

window.onload = fadeOut

$(document).ready(function () {
    var counter = 0
    var c = 0
    var i = setInterval(function () {
        $('.loading-page .counter h1').html(c + '%')
        $('.loading-page .counter hr').css('width', c + '%')
        //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

        /*
        $(".loading-page .counter h1.color").css("width", c + "%");
      */
        counter++
        c++

        if (counter == 101) {
            clearInterval(i)
        }
    }, 50)
})
