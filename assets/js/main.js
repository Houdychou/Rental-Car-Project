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

const btns = document.querySelector('nav button');
const headerContainer = document.querySelector(".header-container");

const scrollDown = document.querySelector('.scroll_down');

const h4Titles = document.querySelectorAll('h4');
const storyGridSpan = document.querySelectorAll('.story__grid span');

const storyGridText = document.querySelectorAll('.story__grid p');

const downloadContainer = document.querySelector('.download__container');
const storyDate = document.querySelectorAll('.story__date');

const selectContainer = document.querySelector('#ride');

darkModeIcon.addEventListener('click', () => {
    btns.classList.toggle('btn-darkmode');

    headerContainer.classList.toggle('header-container-darkmode');

    scrollDown.classList.toggle('border-scroll');
    
    selectContainer.classList.toggle('header__darkmode');

    downloadContainer.classList.toggle('download-container-darkmode');
    swiperRight.forEach(item => {
        item.classList.toggle('white-darkmode');
    });

    swiperLeft.forEach(item => {
        item.classList.toggle('white-darkmode');
    });

    storyDate.forEach(item => {
        item.classList.toggle('storydate-darkmode');
    });

    swiperLeft.forEach(item => {
        item.classList.toggle('icons');
    })

    swiperRight.forEach(item => {
        item.classList.toggle('icons');
    })

    h4Titles.forEach(item => {
        item.classList.toggle('white-darkmode');
    })

    titles.forEach(item => {
        item.classList.toggle('section__header-darkmode');
    });

    storyGridSpan.forEach(item => {
        item.classList.toggle('storygrid-span-darkmode');
    });

    storyGridText.forEach(item => {
        item.classList.toggle('storygrid-p-darkmode');
    });
})