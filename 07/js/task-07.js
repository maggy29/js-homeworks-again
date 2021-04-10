// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size
// . В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

function handleSlider(e) {
  text.setAttribute("style", `font-size:${e.currentTarget.value}px`);
}

input.addEventListener("input", handleSlider);
