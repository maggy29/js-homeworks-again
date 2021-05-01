class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }
  start() {
    const interval = setInterval(() => {
      const currentTime = Date.now();
      this.time = this.targetDate.getTime() - currentTime;
      if (this.time < 0) {
        clear(interval);
        this.time = 0;
      }
      this.timeCounter();
      this.interface(this.time);
    }, 1000);
  }
  timeCounter() {
    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  interface() {
    const refs = {
      days: document.querySelector("[data-value=days]"),
      hours: document.querySelector("[data-value=hours]"),
      mins: document.querySelector("[data-value=mins]"),
      secs: document.querySelector("[data-value=secs]"),
    };
    refs.days.textContent = this.days;
    refs.hours.textContent = this.pad(this.hours);
    refs.mins.textContent = this.pad(this.mins);
    refs.secs.textContent = this.pad(this.secs);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "June 28, 2021",
});

document.addEventListener(
  "DOMContentLoaded",
  countdownTimer.start.bind(countdownTimer)
);
