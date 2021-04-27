let navLinks        =   document.querySelectorAll('.nav-link');
let navContainer    =   document.querySelector('.nav-content');
let navToggle       =   document.querySelector('.nav-toggle-btn');
let toTop           =   document.querySelector('.to-top');
let header          =   document.querySelector('header');

function removeActiveClass () {
    navLinks.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
    navContainer.classList.remove('nav-content-show');
    navToggle.classList.remove('nav-toggle-close');
}

function toggleNavControlButton() {
    navContainer.classList.toggle('nav-content-show');
    navToggle.classList.toggle('nav-toggle-close');
}

navToggle.addEventListener('click', toggleNavControlButton);
navLinks.forEach(elem => {
    elem.addEventListener('click', removeActiveClass);
});

toTop.addEventListener('click', () => {
    setTimeout(() => {
        scrollTo({
            'top': 0,
            'left': 0,
            'behavior': 'smooth'
        });
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[0].classList.add('active');
    }, 600);
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
        toTop.classList.add('to-top-show');
        // header.classList.add('sticky');
        // header.classList.add('shadow');
    } else {
        toTop.classList.remove('to-top-show');
        // header.classList.remove('sticky');
        // header.classList.remove('shadow');
    }
};

function scrollToView(element, elemToScroll) {
    let scrollElem = document.querySelector(elemToScroll);
    let scrollCtrls = document.querySelectorAll(element);

    scrollCtrls.forEach(elem => {
        elem.addEventListener('click', () => {
            scrollElem.scrollIntoView();
        });
    });
}

scrollToView('.click-to-home', '#home');
scrollToView('.click-to-about', '#about');
scrollToView('.click-to-portfolio', '#portfolio');
scrollToView('.click-to-contact', '#contact');