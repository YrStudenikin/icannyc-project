let footerNavBtn = document.querySelectorAll('.footer__nav-btn');

footerNavBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    let currentMenuList = e.currentTarget.closest('.footer__nav-block').querySelector('.footer__nav-list');

    e.currentTarget.classList.toggle('footer__nav-btn--open');
    currentMenuList.classList.toggle('footer__nav-list--open');
  });
})
