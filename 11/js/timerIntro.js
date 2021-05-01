const logger = (message) => console.log(message);

const timeOut = setTimeout(console.log(Date.now()), 1000);
console.log(timeOut);
clearTimeout(timeOut);
console.log(timeOut);

const interval = setInterval(() => {
  console.log(Date.now());
}, 500);
console.log(interval);
clearInterval(interval);

let notificationCount = 0;

const subscription = setInterval(() => {
  if (notificationCount === 3) {
    clearInterval(subscription);
  } else {
    logger("Subscribe");
    notificationCount += 1;
  }
}, 3000);
