const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuMobIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarIcon = document.querySelector('.navbar-shoppin-bar')
const shopoingCartContainer = document.querySelector('#shopoingCartContainer')

const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuMobIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isasideMenuClosed = shopoingCartContainer.classList.contains('inactive')

    if (!isasideMenuClosed) {
        shopoingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu() {
    const isasideMenuClosed = shopoingCartContainer.classList.contains('inactive')

    mobileMenu.classList.toggle('inactive')

    if (!isasideMenuClosed) {
        shopoingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside()

}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    } else if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    shopoingCartContainer.classList.toggle('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetailsAside() {
    shopoingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')

}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')

}

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

productList.push({
    name: 'car',
    price: 920,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

productList.push({
    name: 'pencil',
    price: 2,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailsAside)

        const productinfo = document.createElement('div')
        productinfo.classList.add('product-info')

        const productInfodiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfodiv.append(productPrice, productName)

        const productInfofigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfofigure.append(productImgCard)

        productinfo.append(productInfodiv, productInfofigure)
        productCard.append(productImg, productinfo)

        cardsContainer.appendChild(productCard)
    }

}

renderProducts(productList)