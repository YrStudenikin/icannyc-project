const openSupportBtn = document.querySelectorAll('.js-open-support');

openSupportBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    let current = e.currentTarget;
    let parent = current.closest('.support');
    let targetSupportFormBg = parent.querySelector('.support__form-bg');
    let targetSupportForm = parent.querySelector('.support__form');

    if (!targetSupportForm.classList.contains('support__form--open')) {
      targetSupportFormBg.classList.add('support__form-bg--open');
      targetSupportForm.classList.add('support__form--open');
    }
  });
});
