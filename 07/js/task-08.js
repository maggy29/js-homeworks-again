"use strict";

//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит
//количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount -
//число. Функция создает столько div, сколько указано в amount и добавляет их в
// div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector("#controls>input"),
  addBtn: document.querySelector('#controls>button[data-action="render"]'),
  removeBtn: document.querySelector('#controls>button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

const renderBoxes = () => {
  const randomForRgb = () => Math.floor(Math.random() * 256);
  const randomColor = () =>
    `rgb(${randomForRgb()}, ${randomForRgb()}, ${randomForRgb()})`;

  const createBoxes = (amount) => {
    const initSize = 30;
    const step = 10;
    const markup = Array(amount)
      .fill("")
      .reduce(
        (str, box, idx) =>
          (str += `
    <div style="
    width:${initSize + step * idx}px;
    height:${initSize + step * idx}px;
    background-color:${randomColor()};"
    ></div>`),
        ""
      );
    refs.boxes.innerHTML = "";
    refs.boxes.insertAdjacentHTML("afterbegin", markup);
  };
  const boxesAmount = Number(refs.input.value);
  createBoxes(boxesAmount);
};
const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

refs.addBtn.addEventListener("click", renderBoxes);
refs.removeBtn.addEventListener("click", destroyBoxes);
