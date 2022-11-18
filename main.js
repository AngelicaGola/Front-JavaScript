const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuMobIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarIcon = document.querySelector('.navbar-shoppin-bar')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuMobIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')

}

function toggleCarritoAside() {
    const ismobileMenuOpen = mobileMenu.classList.contains('active')
    const isAsideOpen = aside.classList.contains('active')

    aside.classList.toggle('inactive')
    if (ismobileMenuOpen) {


    }

}