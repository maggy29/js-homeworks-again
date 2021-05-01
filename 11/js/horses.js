import random from "./utils/randomInRange.js";

const horses = ["White", "Black", "Brown", "Red", "Grey"].map((horse) => ({
  name: horse,
  time: random(2000, 5000),
}));

const promises = horses.map((horse) => race(horse));

congratulateWinner(promises);
raceResults(promises);

function congratulateWinner(promises) {
  Promise.race(promises)
    .then((winner) =>
      console.log(
        `Our champion is ${winner.name}, it finished at ${winner.time}!!!`
      )
    )
    .catch((err) => console.log(err));
}

function raceResults(promises) {
  Promise.all(promises)
    .then((result) => console.table(result))
    .catch((err) => console.log(err));
}

function race(horse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(horse);
    }, horse.time);
  });
}
