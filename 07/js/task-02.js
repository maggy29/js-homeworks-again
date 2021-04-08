"use strict";

//Напиши скрипт, который для каждого элемента массива ingredients создаст
//отдельный li, после чего вставит все li за одну операцию в список
//ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");
const list = ingredients.map((el) => {
  let item = document.createElement("li");
  item.textContent = el;
  return item;
});
console.log(list);
console.log(...list);
ul.append(...list);
