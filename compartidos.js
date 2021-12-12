var mobileNav = document.querySelector('.mobile-nav');
var hamburgerButton = document.querySelector('.hamburger_button');



hamburgerButton.addEventListener('click', () => {
    mobileNav.classList.toggle("open");
    hamburgerButton.classList.toggle("open");
})

mobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('open')
})