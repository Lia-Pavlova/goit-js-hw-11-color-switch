const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;
let isActive = false;

const StartBtnRef = document.querySelector("[data-action='start']");
const StopBtnRef = document.querySelector("[data-action='stop']");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {

  // если изменение темы запущено, то просто return из функции
  // если изменение темы не запущено, то запускаем - ставим буль и setInterval
  
  if (isActive) {
    console.log('изменение темы запущено, кнопка старт не активна');
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    // рандомная смена цвета из интернета

    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];

    console.log('изменяю цвет фона');

  }, 1000); //будет видно, что кнопка старт повторно не нажимается, когда изменение темы запущено
}
StartBtnRef.addEventListener('click', onStartBtn);

function onStopBtn() {
  clearInterval(intervalId, console.log('останавливаю изменения цвета фона'));
  isActive = false;
}
StopBtnRef.addEventListener('click', onStopBtn);
