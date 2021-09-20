const body = document.querySelector('body');
const burger = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {

  setTimeout(() => {
    body.classList.toggle('hide-scroll')
    burger.classList.toggle('is-open');
    mobileMenu.classList.toggle('menu-mobile--open');
  }, 1);
});
