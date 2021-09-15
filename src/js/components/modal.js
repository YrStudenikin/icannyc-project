//modals
const openModalBtn = document.querySelectorAll('.js-open-modal');
const modals = document.querySelectorAll('.modal');
const modalContainer = document.querySelectorAll('.modal__container');
const modalClose = document.querySelectorAll('.modal__btn-close');

/*--- Кнопки открытия модалок ---*/
openModalBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let current = e.currentTarget;
    let targetModal = document.getElementById(current.getAttribute('data-modal'));

    openModal(targetModal);
  });
});

/*--- Закрытие модалки по клику вне ---*/
modalContainer.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
  });
});

modals.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  })
});
/*--------*/

modalClose.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    let currentTarget = event.currentTarget;
    let currentModal = currentTarget.closest('.modal');

    closeModal(currentModal);
  });
});

let openModal = (modal) => {
  modals.forEach(item => {
    closeModal(item);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('hide-scroll');
}

let closeModal = (modal) => {
/*  if (header.classList.contains('menu-open')) {
    header.classList.remove('menu-open');
    document.querySelector('.mobile-menu').classList.remove('is-open');
    document.querySelector('.menu-burger').classList.remove('is-open');
  }*/
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('hide-scroll');
}
