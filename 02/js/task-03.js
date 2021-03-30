'use strict';

const findLongestWord = function (string) {
  let longest = '';
  const words = string.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
