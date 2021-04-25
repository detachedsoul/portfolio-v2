let navLinks        =   document.querySelectorAll('.nav-link');
let navContainer    =   document.querySelector('.nav-content');
let navToggle       =   document.querySelector('.nav-toggle-btn');
let toTop           =   document.querySelector('.to-top');

function removeActiveClass() {
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
        })
    }, 600)
});

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
        toTop.classList.add('to-top-show');
    } else {
        toTop.classList.remove('to-top-show');
    }
}