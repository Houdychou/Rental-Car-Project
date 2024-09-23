const menuBtn = document.querySelector('nav_menu_btn');
const navLinks = document.querySelector('.nav_links');
const menuBtnIcon = document.querySelector('i');

menuBtnIcon.addEventListener('click', () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
} 

ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container form", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-container img", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".select__container", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
});

ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".location__content .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

const selectCards = document.querySelectorAll('.select__card');
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.querySelector('#select-price');
const swiperLeft = document.querySelectorAll('.swiper-button-prev');
const swiperRight = document.querySelectorAll('.swiper-button-next');
function updateSwiper(event, args) {
        const index = args && args[0].realIndex;
        priceEl.textContent = price[index];
        selectCards.forEach((item) => {
            item.classList.remove("show__info");
        })
        selectCards[index].classList.add("show__info");
}

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 0,
        modifier: 2,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
    },

    onAny(event, ...args) {
        updateSwiper(event, args);
    }
})

swiperLeft.forEach((swiperLeft) => {
    swiperLeft.addEventListener('click', () => {
        swiper.slidePrev(); 
    })
})

swiperRight.forEach((swiperRight) => {
    swiperRight.addEventListener('click', () => {
        swiper.slideNext();
    })
})

ScrollReveal().reveal(".banner__container", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".story__card", {
    ...scrollRevealOption,
    delay: 500,
});

const banner = document.querySelector('.banner__wrapper');
const bannerContent = Array.from(banner.children);

bannerContent.forEach(item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
});

ScrollReveal().reveal(".download__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1000,
});

const darkModeIcon = document.querySelector('.darkmode i');
const body = document.querySelector('body');
const header = document.querySelector('header');

const titles = document.querySelectorAll('.section__header');
const headerLinks = document.querySelectorAll("header a");
const h1 = document.querySelector('h1');

const headerForm = document.querySelector('header form');
const headerLabel = document.querySelectorAll('label');
const headerInputs = document.querySelectorAll('header input');

const btns = document.querySelector('nav button');
const headerContainer = document.querySelector(".header-container");

const rideSection = document.querySelector('#ride');

darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('body_darkmode');
    header.classList.toggle('header__darkmode');

    h1.classList.toggle("white-darkmode");
    headerForm.classList.toggle("form_darkmode");

    btns.classList.toggle("btn-darkmode");
    headerContainer.classList.toggle("header-container-darkmode");

    rideSection.classList.toggle('header__darkmode');
    titles.forEach(item => {
        item.classList.toggle('section__header-darkmode');
    });

    headerLinks.forEach(item => {
        item.classList.toggle("white-darkmode");
    });

    headerLabel.forEach(item => {
        item.classList.toggle("white-darkmode");
    });

    headerInputs.forEach(item => {
        item.classList.toggle("input_darkmode");
    });
})