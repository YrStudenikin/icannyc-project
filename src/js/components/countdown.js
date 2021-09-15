class CountDown {
  constructor(item, expiredDate, onComplete) {
    this.onComplete = onComplete;
    this.setBlocksUnitTime(item);
    this.setExpiredDate(expiredDate);
  }

  setExpiredDate(expiredDate) {
    // получаем текущее время
    const currentTime = new Date().getTime();

    // расчет остатка времени
    this.timeRemaining = expiredDate.getTime() - currentTime;

    this.timeRemaining <= 0 ?
      this.complete() :
      this.start();
  }

  // установка конкретных html блоков для отдельных единиц времени
  // для дальнейшего рендеринга в них значений таймера
  setBlocksUnitTime(element) {
    let blockHours = element.querySelector('.countdown__block[data-unit="hours"]');
    let blockMinutes = element.querySelector('.countdown__block[data-unit="minutes"]');
    let blockSeconds = element.querySelector('.countdown__block[data-unit="seconds"]');

    this.hourNodeItems = blockHours.querySelectorAll('.countdown__item-val');
    this.minutesNodeItems = blockMinutes.querySelectorAll('.countdown__item-val');
    this.secondsNodeItems = blockSeconds.querySelectorAll('.countdown__item-val');
  }

  render() {
    let time = this.getTime();

    // в переменные попадают числа времени в формате 00
    let hours = this.format(time.hours);
    let minutes = this.format(time.minutes);
    let seconds = this.format(time.seconds);

    // функция - разделитель рендеринга (каждое число в свою ячейку в html)
    this.renderTimeDivider(this.hourNodeItems, hours);
    this.renderTimeDivider(this.minutesNodeItems, minutes);
    this.renderTimeDivider(this.secondsNodeItems, seconds);
  }


  complete() {
    if (typeof this.onComplete === 'function') {
      this.onComplete();
    }
  }

  getTime() {
    // получаем значения единиц времени в человекопонятном формате
    // если нужны дни и часы в пределах суток, раскоментировать days,
    // а в днях добавить остаток от 24 (... % 24)
    return {
      // days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
      hours: Math.floor(this.timeRemaining / 1000 / 60 / 60),
      minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
      seconds: Math.floor(this.timeRemaining / 1000) % 60
    };
  }

  update() {
    this.render(this.getTime());
  }

  start() {
    this.update();

    const intervalId = setInterval(() => {
      this.timeRemaining -= 1000;

      if (this.timeRemaining < 0) {
        complete();

        clearInterval(intervalId);
      } else {
        this.update();
      }

    }, 1000);
  }

  format(t) {
    return t < 10 ? '0' + t : t.toString();
  }

  renderTimeDivider(block, val) {
    block[0].innerHTML = val[0];
    block[1].innerHTML = val[1];
  }
}

const complete = () => {
  console.log('таймер окончен');
};


const createCountDownInstance = (element, expiredDate) => {
  // Класс счетчика. Принимает html элемент счетчика, конечную дату и функцию,
  // которая срабатывает по окончанию таймера
  return new CountDown(
    element,
    expiredDate,
    complete
  );
}

const initCountdown = () => {
  const countdownItems = document.querySelectorAll('.countdown');

  if (countdownItems.length > 0) {
    for (let i = 0; i < countdownItems.length; ++i) {
      let item = countdownItems[i];
      let endDateTime = new Date(item.getAttribute('data-date-end'));

      createCountDownInstance(item, endDateTime, complete);
    }
  }
}

initCountdown();
