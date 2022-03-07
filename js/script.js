var mobileMenu = document.querySelector('.mobile-menu');
var iconMenu = document.querySelector('#icon-menu'); // img element
var iconHamburger = "../assets/shared/mobile/icon-hamburger.svg"; // store icon hamburger in a variable
var iconClose = "../assets/shared/mobile/icon-close.svg"; // store icon close in a variable
var body = document.querySelector('body');

function changeMenu() {

    if (mobileMenu.classList.contains('open')) { // close menu
        mobileMenu.classList.remove('open');
        mobileMenu.classList.remove('fade-in');
        mobileMenu.classList.add('fade-out');
        iconMenu.src = iconHamburger;
        body.classList.remove('noscroll');
    } else { // open menu
        mobileMenu.classList.add('open');
        mobileMenu.classList.remove('fade-out');
        mobileMenu.classList.add('fade-in');
        iconMenu.src = iconClose;
        body.classList.add('noscroll');
    }
}

iconMenu.addEventListener('click', changeMenu);