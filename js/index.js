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

/* Orçamento */
document.querySelector('#qtde').addEventListener('change', atualizarPreco)
document.querySelector('#js').addEventListener('change', atualizarPreco)
document.querySelector('#layout-sim').addEventListener('change', atualizarPreco)
document.querySelector('#layout-nao').addEventListener('change', atualizarPreco)
document.querySelector('#prazo').addEventListener('change', function () {
    const prazo = document.querySelector('#prazo').value
    document.querySelector(
        'label[for=prazo]'
    ).innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value

    let preco = qtde * 100
    if (temJS) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia

    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}

/* Botão voltar para o topo = escrevendo em camel Case*/
const backToTopButton = document.querySelector('.scrolldown') /* Kebab case*/

function backToTop() {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/* When Scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
