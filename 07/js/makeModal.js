const openModal = document.querySelector('[data-action="open-modal"]');
const closeModalByBtn = document.querySelector('[data-action="close-modal"]');
const closeModalByBackdropClick = document.querySelector(".js-backdrop");

openModal.addEventListener("click", handleOpenModal);
closeModalByBtn.addEventListener("click", handleCloseModal);
closeModalByBackdropClick.addEventListener(
  "click",
  handleCloseModalByBackdropClick
);

function handleOpenModal() {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", handleCloseModalByEsc);
}

function handleCloseModal() {
  document.body.classList.remove("show-modal");
}

function handleCloseModalByBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  handleCloseModal();
}

function handleCloseModalByEsc(e) {
  if (e.code !== "Escape") {
    return;
  }
  handleCloseModal();
  window.removeEventListener("keydown", handleCloseModalByEsc);
}
