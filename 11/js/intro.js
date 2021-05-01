const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      resolve("promise resolved");
    } else {
      reject("promise rejected");
    }
  }, 1000);
});

const onSuccess = (message) => console.log(message);
const onError = (message) => console.log(message);

promise.then(onSuccess).catch(onError);
