const helo = document.querySelector('.menu-phone')
const nav = document.querySelector('.nav-lists')

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});