const darkModeIcon = document.querySelector('.darkmode i');
const body = document.querySelector('body');
const header = document.querySelector('header');

const burgerMenu = document.querySelector('.nav_menu_btn i');
const ul = document.querySelector('header ul');
const titles = document.querySelectorAll('.section__header');
const headerLinks = document.querySelectorAll("header a");
const h1 = document.querySelector('h1');

const headerForm = document.querySelector('header form');
const headerLabel = document.querySelectorAll('label');
const headerInputs = document.querySelectorAll('header input');

burgerMenu.addEventListener('click', () => {
    ul.classList.toggle('open');
    burgerMenu.classList.toggle('ri-menu-line');
    burgerMenu.classList.toggle('ri-close-line');
})

darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('body_darkmode');
    header.classList.toggle('header__darkmode');

    h1.classList.toggle('white-darkmode');
    darkModeIcon.classList.toggle('white-darkmode');
    headerForm.classList.toggle("form_darkmode");

    headerLinks.forEach(item => {
        ul.classList.remove('open');
        item.classList.toggle('white-darkmode');
    });

    headerLabel.forEach(item => {
        item.classList.toggle('white-darkmode');
    });

    headerInputs.forEach(item => {
        item.classList.toggle('input_darkmode');
    });

    if(darkModeIcon.classList.contains("ri-moon-line")) {
        darkModeIcon.classList.toggle("ri-sun-line");
    }
});