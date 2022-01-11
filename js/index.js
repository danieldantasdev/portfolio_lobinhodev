/* Dark Mode */
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

/* Mostrar menu */
var menuHamburguer = document.querySelector('#menu-btn')
menuHamburguer.addEventListener('click', () => {
    var nav = document
        .querySelector('.l-nav__container')
        .classList.toggle('show-menu')
})

/* Botão voltar para o topo = escrevendo em camel Case*/
const backToTopButton = document.querySelector('.scroll-to-top') /* Kebab case*/

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

var offset = 1000
var duration = 100
jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.scroll-to-top').addClass('show')
    } else {
        jQuery('.scroll-to-top').removeClass('show')
    }
})
jQuery('.scroll-to-top').on('click', function (event) {
    event.preventDefault()
    jQuery('html, body').animate({ scrollTop: 0 }, duration)
    return false
})

/* Contact */
$('button').click(function () {
    $('button').toggleClass('active')
    $('.title').toggleClass('active')
    $('nav').toggleClass('active')
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
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
    #projects .l-section__project-card-item,
    #interesting .l-section__interesting-card-content,
    #contact 
    `,
    { interval: 200 }
)

/* bug reprodução */
var myVideo = document.getElementById('video-project')

function playVid() {
    myVideo.play()
}

function pauseVid() {
    myVideo.pause()
}
