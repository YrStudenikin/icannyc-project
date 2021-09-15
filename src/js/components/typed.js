const HERO_TITLE_1 = 'ОСВОЙ ПРОФЕССИЮ С НУЛЯ И НАЧНИ <br> ЗАРАБАТЫВАТЬ ОТ $2000';
const HERO_TITLE_2 = 'ИДИ К СВОЕЙ МЕЧТЕ';
const HERO_TITLE_3 = 'ПОЛУЧИ ШАНС ВЫИГРАТЬ <br> $5000 И РАБОТУ В США';

let options = {
  strings: [HERO_TITLE_1, HERO_TITLE_2, HERO_TITLE_3],
  typeSpeed: 50,
  showCursor: false,
  backSpeed: 10,
  backDelay: 2000,
  loop: true,
};

let typedHero = new Typed('.typed', options);
