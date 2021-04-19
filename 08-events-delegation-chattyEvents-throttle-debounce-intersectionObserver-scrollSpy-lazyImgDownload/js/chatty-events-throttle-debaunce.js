window.addEventListener(
  "scroll",
  _.throttle(() => console.log("scroll"), 1000)
);

document
  .querySelector(".input")
  .addEventListener("input", _.debounce(onDebounce, 300));

function onDebounce() {
  console.log("input", Date.now());
}
