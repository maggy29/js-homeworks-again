const refs = {
  imgs: document.querySelectorAll("img"),
};

function lazyLoad(img) {
  const options = { threshold: 0.01, rootMargin: "200px 0px" };
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imgTag = entry.target;
        const imgUrl = imgTag.dataset.lazy;
        imgTag.setAttribute("src", imgUrl);
        observer.disconnect();
      }
    });
  }, options);
  imgObserver.observe(img);
}

refs.imgs.forEach((img) => lazyLoad(img));
