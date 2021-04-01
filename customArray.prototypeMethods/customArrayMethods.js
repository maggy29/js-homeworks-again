Array.prototype.customReduce = function (callback, initValue = Array[0]) {
  let accumulator = initValue;

  for (let i = 0; i < this.length; i += 1) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.customReduce((acc, num) => (acc += num), 0));

Array.prototype.customMap = function (callback) {
  const mapResult = [];
  for (let i = 0; i < this.length; i += 1) {
    mapResult.push(callback(this[i], i, this));
  }
  return mapResult;
};

console.log(numbers.customMap((num) => num * num));
console.log(numbers.map((num) => num * num));

Array.prototype.customFilter = function (callback) {
  const filterResult = [];
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      filterResult.push(this[i]);
    }
  }
  return filterResult;
};

console.log(numbers.customFilter((num) => num > 3));
console.log(numbers.filter((num) => num > 3));

Array.prototype.customFind = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

console.log(numbers.customFind((num) => num === 3));
console.log(numbers.find((num) => num === 3));

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(numbers.customEvery((num) => num % 2 === 0));
console.log(numbers.every((num) => num % 2 === 0));
console.log([2, 4, 6, 8].customEvery((num) => num % 2 === 0));
console.log([2, 4, 6, 8].every((num) => num % 2 === 0));

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (callback(this[i], i, this)) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

console.log(numbers.customSome((num) => num % 2 === 0));
console.log(numbers.some((num) => num % 2 === 0));
console.log([2, 4, 6, 8].customSome((num) => num % 2 === 1));
console.log([2, 4, 6, 8].some((num) => num % 2 === 1));
