// Search btn
var modalSearch = document.getElementById('modal__search')

function openModalSearch() {
    modalSearch.style.display = 'block'
}

function closeModalSearch() {
    modalSearch.style.display = 'none'
}

window.addEventListener('click', (event) => {
    if (event.target == modalSearch) {
        modalSearch.style.display = "none";
    }
})

// Menu btn
var modalMenu = document.querySelector('.modal__menu-overlay')
var menu = document.querySelector('.modal__menu-wrap')

function openModalMenu() {
    menu.style.right = 0
    modalMenu.style.display = 'block'
}

function closeModalMenu() {
    menu.style.right = '100%'
    modalMenu.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modalMenu) {
        modalMenu.style.display = 'none'
        menu.style.right = '100%'
    }
}

window.onscroll = function() {
    if (window.scrollY > menu.clientHeight) {
        modalMenu.style.display = 'none'
        menu.style.right = '100%'
    }
}

// Modal Video
var modalVideo = document.querySelector('.modal__video')

function openModalVideo() {
    modalVideo.style.visibility = 'visible'
    modalVideo.style.opacity = '1'
}

window.addEventListener('click', (event) => {
    if (event.target == modalVideo) {
        modalVideo.style.visibility = 'hidden'
        modalVideo.style.opacity = '0'
    }
})

// pause video on click modal
const video = document.querySelector('iframe')

window.addEventListener('click', () => {
    const source = video.src
    video.src = ''
    video.src = source
})