import randomInRange from "./utils/randomInRange.js";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('[data-action="start-color"]'),
  stop: document.querySelector('[data-action="stop-color"]'),
  body: document.querySelector("body"),
};

refs.start.addEventListener("click", handleStartColor);
refs.stop.addEventListener("click", handleStopColor);

let color;

function handleStartColor() {
  color = setInterval(() => {
    refs.body.setAttribute(
      "style",
      `background-color:${colors[randomInRange(0, 5)]};`
    );
  }, 1000);
  refs.start.setAttribute("disabled", "true");
}

function handleStopColor() {
  clearInterval(color);
  refs.body.removeAttribute("style");
  refs.start.removeAttribute("disabled");
}

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет
//цвет фона body на случайное значение из массива используя инлайн-стиль.
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

//⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай
// так, чтобы пока изменение темы запушено, кнопка Start была не активна.
