const timeout = setTimeout(() => console.log(new Date()), 1000);
clearTimeout(timeout);

const clock = document.querySelector(".clock");

const clockId = setInterval(() => (clock.textContent = new Date()), 1000);
//clearInterval(clockId);

const sections = document.querySelector(".sections");
const title = document.querySelector(".title");

sections.addEventListener("scroll", custDebounce(handleScroll, 500));

function handleScroll(e) {
  const value = e.target.scrollTop;
  title.textContent = ~~value;
  console.log(~~value, new Date());
}

function custThrottle(callback, delay) {
  let timeout; // id

  return function () {
    if (timeout) {
      console.log("throttle");
      return;
    }

    timeout = setTimeout(() => {
      callback(...arguments);
      timeout = null;
    }, delay);
  };
}

function custDebounce(callback, delay) {
  let timeout; // id

  return function () {
    if (timeout) {
      clearTimeout(timeout);
      //timeout = null;
    }

    timeout = setTimeout(() => {
      callback(...arguments);
      //timeout = null;
    }, delay);
  };
}

// const sectionList = document.querySelectorAll(".section");
// //const options = { threshold: 0.5 };

// const sectionObserver = new IntersectionObserver(onEntry, {});
// sectionList.forEach((section) => sectionObserver.observe(section));

// function onEntry(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const entryId = entry.target.dataset.id;
//       const navCurrentActive = document.querySelector(".active");
//       const navNextActive = document.querySelector(`li[data-id="${entryId}"]`);
//       if (navCurrentActive) {
//         navCurrentActive.classList.remove("active");
//       }
//       navNextActive.classList.add("active");
//     }
//   });
// }

const imgList = document.querySelectorAll(".leftimg");

function lazyLoad(entry) {
  const options = { threshold: 0.01, rootMargin: "100px 0px" };
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const entryUrl = entry.target.dataset.src;
        entry.target.setAttribute("src", entryUrl);
        observer.disconnect();
      }
    });
  }, options);
  imgObserver.observe(entry);
}

imgList.forEach((img) => lazyLoad(img));
