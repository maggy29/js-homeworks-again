const refs = {
  nav: document.querySelector(".js-page-nav"),
  sections: document.querySelectorAll(".section"),
};

function onEntry(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeSectionId = entry.target.id;
      const newActiveNav = refs.nav.querySelector(
        `a[href="#${activeSectionId}"]`
      );
      const activeNav = refs.nav.querySelector(".page-nav__link--active");
      if (activeNav) {
        activeNav.classList.remove("page-nav__link--active");
      }
      newActiveNav.classList.add("page-nav__link--active");
    }
  });
}

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(onEntry, options);
refs.sections.forEach((section) => observer.observe(section));
