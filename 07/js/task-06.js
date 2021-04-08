"use strict";

//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если
//неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector("#validation-input");

const lengthValidation = (e) => {
  if (Number(input.dataset.length) === e.currentTarget.value.length) {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  } else {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
    } else {
      input.classList.add("invalid");
    }
  }
};
input.addEventListener("change", lengthValidation);
