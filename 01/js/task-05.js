'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `Speed:${car.speed}, price:${car._price}, maxSpeed:${car.maxSpeed}, isOn:${car.isOn}, distance:${car.distance}`,
    );
  }
  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this.speed = speed ? speed : 0;
    this._price = price ? price : 0;
    this.maxSpeed = maxSpeed ? maxSpeed : 0;
    this.isOn = isOn ? isOn : false;
    this.distance = distance ? distance : 0;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
    return;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
