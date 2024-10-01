const darkModeIcon = document.querySelector('.darkmod');
const body = document.querySelector('body');
const header = document.querySelector('header');

const ul = document.querySelector('header ul');
const titles = document.querySelectorAll('.section__header');

const headerLinks = document.querySelectorAll("header a");
const h1 = document.querySelector('h1');

const headerForm = document.querySelector('header form');
const headerLabel = document.querySelectorAll('label');
const headerInputs = document.querySelectorAll('header input');

const menuBtn = document.querySelector('.nav_menu_btn i');
const navLinks = document.querySelector('.nav_links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("class", "ri-menu-line");
});

darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('body_darkmode');
    header.classList.toggle('header__darkmode');

    h1.classList.toggle('white-darkmode');
    darkModeIcon.classList.toggle('white-darkmode');
    headerForm.classList.toggle('form_darkmode');

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

    titles.forEach(item => {
        item.classList.toggle('white-darkmode');
    })

    if(darkModeIcon.classList.contains('ri-moon-line')) {
        darkModeIcon.classList.remove('ri-moon-line');
        darkModeIcon.classList.add('ri-sun-line');
        darkModeIcon.classList.add('white-darkmode');
    } else {
        darkModeIcon.classList.add('ri-moon-line');
        darkModeIcon.classList.remove('ri-sun-line');
        darkModeIcon.classList.remove('white-darkmode');
    }
});