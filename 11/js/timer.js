const refs = {
  start: document.querySelector('[data-action="start-timer"]'),
  stop: document.querySelector('[data-action="stop-timer"]'),
  clockFace: document.querySelector(".js-clockface"),
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - startTime;
      updateClockface(this.deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

refs.start.addEventListener("click", timer.start.bind(timer));
refs.stop.addEventListener("click", timer.stop.bind(timer));
