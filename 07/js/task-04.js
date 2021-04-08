"use strict";

//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

let currentValue = 0;

const increment = () => {
  currentValue += 1;
  value.textContent = currentValue;
};

const decrement = () => {
  currentValue -= 1;
  value.textContent = currentValue;
};

incrBtn.addEventListener("click", increment);
decrBtn.addEventListener("click", decrement);
