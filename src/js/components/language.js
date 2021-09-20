let switchLanguageBtn = document.querySelector('.language__btn');
let allLanguageBtns = document.querySelectorAll('.language__list button');
let languageListWrap = document.querySelector('.language__list-wrapper');
let activeLanguageName = document.querySelector('.language__active-name');

switchLanguageBtn.addEventListener('click', (e) => {
  e.preventDefault();

  languageListWrap.classList.toggle('language__list-wrapper--open');
});


allLanguageBtns.forEach(item => {
  item.addEventListener('click', (e) => {
    activeLanguageName.innerHTML = e.currentTarget.textContent;

    if (languageListWrap.classList.contains('language__list-wrapper--open')) {
      languageListWrap.classList.remove('language__list-wrapper--open');
    }
  });
});
