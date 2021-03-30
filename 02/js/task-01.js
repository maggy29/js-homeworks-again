'use strict';

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const keys = [12, 13, 14, 15, 16, 17];
const values = [21, 31, 41, 51, 61, 71];
//const combine =
const result = [];
keys.forEach((key, i) => {
  const obj = {};
  obj[key] = values[i];
  result.push(obj);
});
console.log(result);

const combine = function (keys, values) {
  const result = [];
  for (let i = 0; i < keys.length; i += 1) {
    const obj = {};
    obj[keys[i]] = values[i];
    result.push(obj);
  }
  return result;
};
console.log(combine(keys, values));
