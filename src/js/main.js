document.addEventListener("DOMContentLoaded", function(event) {

  /*typed*/
  let HERO_TITLE_1 = 'ОСВОЙ ПРОФЕССИЮ С НУЛЯ И НАЧНИ <br> ЗАРАБАТЫВАТЬ ОТ $2000';
  let HERO_TITLE_2 = 'ИДИ К СВОЕЙ МЕЧТЕ';
  let HERO_TITLE_3 = 'ПОЛУЧИ ШАНС ВЫИГРАТЬ <br> $5000 И РАБОТУ В США';

  let options = {
    strings: [HERO_TITLE_1, HERO_TITLE_2, HERO_TITLE_3],
    typeSpeed: 50,
    showCursor: false,
    backSpeed: 10,
    backDelay: 2000,
    loop: true,
  };

  if (document.querySelector('.typed')) {
    let typedHero = new Typed('.typed', options);
  }

  /*support form*/
  let openSupportBtn = document.querySelectorAll('.js-open-support');

  if (openSupportBtn) {
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
  }

  /*tooltips*/
  let tooltip = document.querySelectorAll('.tooltip-btn');

  if (tooltip) {
    tooltip.forEach(item => {
      let tooltipContent = item.querySelector('.tooltip-btn__content');

      tippy(item, {
        content: tooltipContent.innerHTML,
        trigger: 'click',
        arrow: true,
        allowHTML: true,
        maxWidth: 380,
        placement: 'right',
      });

      if (window.innerWidth <= 400) {
        item._tippy.setProps({maxWidth: 230})
      }
    });
  }

  /*mobile-menu*/
  let body = document.querySelector('body');
  let burger = document.getElementById('burger-menu');
  let mobileMenu = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {

    setTimeout(() => {
      body.classList.toggle('hide-scroll')
      burger.classList.toggle('is-open');
      mobileMenu.classList.toggle('menu-mobile--open');
    }, 1);
  });

  /*language switch*/
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

  /*Инициализация таймеров*/
  /*выполняется по окончанию таймера*/
  let complete = () => {
    console.log('таймер окончен');
  };

  /*создает инстансы счетчиков*/
  let createCountDownInstance = (element, expiredDate) => {
    // Класс счетчика. Принимает html элемент счетчика, конечную дату и функцию,
    // которая срабатывает по окончанию таймера
    return new CountDown(
      element,
      expiredDate,
      complete
    );
  }

  let initCountdown = () => {
    let countdownItems = document.querySelectorAll('.countdown');

    if (countdownItems.length > 0) {
      for (let i = 0; i < countdownItems.length; ++i) {
        let item = countdownItems[i];
        let endDateTime = new Date(item.getAttribute('data-date-end'));

        createCountDownInstance(item, endDateTime, complete);
      }
    }
  }

  initCountdown();

  /*course collapse more info*/
  let collapseBtn = document.querySelector('.course-intro__btn-detail');
  let collapseCourseDetail = document.querySelector('.course-intro__collapse');

  if (collapseBtn) {
    collapseBtn.addEventListener('click', function(e) {
      e.preventDefault();

      let itemToggle = JSON.parse(this.getAttribute('aria-expanded'));
      let booleanToString = b => b.toString();

      this.setAttribute('aria-expanded', booleanToString(!itemToggle));
      collapseCourseDetail.classList.toggle('course-intro__collapse--open');
    });
  }

  /*footer nav toggle*/
  let footerNavBtn = document.querySelectorAll('.footer__nav-btn');

  footerNavBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      let currentMenuList = e.currentTarget.closest('.footer__nav-block').querySelector('.footer__nav-list');

      e.currentTarget.classList.toggle('footer__nav-btn--open');
      currentMenuList.classList.toggle('footer__nav-list--open');
    });
  });


  /*sliders*/
  const reviewsSlider = new Swiper('.reviews-slider .swiper', {
    speed: 400,
    slidesPerView: "auto",
    navigation: {
      nextEl: '.reviews-slider__btn--next',
      prevEl: '.reviews-slider__btn--prev',
    },
    breakpoints: {
      769: {
        simulateTouch: false,
      }
    }
  });
});
