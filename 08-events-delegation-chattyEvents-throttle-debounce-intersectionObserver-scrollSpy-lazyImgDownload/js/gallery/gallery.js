import imgs from "./gallery-items.js";

//Создай галерею с возможностью клика по ее элементам и просмотра полноразмерног
//о изображения в модальном окне. Превью результата посмотри по ссылке.
//Разбей задание на несколько подзадач:
//Создание и рендер разметки по массиву данных и предоставленному шаблону.
//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
//Открытие модального окна по клику на элементе галереи.
//Подмена значения атрибута src элемента img.lightbox__image.
//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

//Разметка элемента галереи
//Ссылка на оригинальное изображение должна храниться в data-атрибуте source на
//элементе img, и указываться в href ссылки (это необходимо для доступности).
//Дополнительно
//Закрытие модального окна по клику на div.lightbox__overlay.
//Закрытие модального окна по нажатию клавиши ESC.
//Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

const refs = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalImg: document.querySelector(".lightbox__image"),
};

//render of gallery=============================================================
const galleryMarkup = imgs.reduce(
  (acc, img, idx) => (acc += makeGalleryMarkup(img, idx)),
  ""
);
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
function makeGalleryMarkup(img, idx) {
  return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${img.original}"
        >
          <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            data-id="${idx}"
            alt="${img.description}"
          />
        </a>
      </li>`;
}

//eventListener and modal and slider===============================================================
refs.gallery.addEventListener("click", openModal);
function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const imgUrl = e.target.dataset.source;
  const imgId = e.target.dataset.id;
  refs.modalImg.setAttribute("src", imgUrl);
  refs.modalImg.setAttribute("data-id", imgId);
  refs.modal.classList.add("is-open");
  refs.modal.addEventListener("click", clickModal);
  window.addEventListener("keydown", closeModalByEsc);
}
function clickModal(e) {
  const currentId = refs.modalImg.dataset.id;
  const prevImg = document.querySelector(
    `img[data-id="${Number(currentId) - 1}"]`
  );
  const nextImg = document.querySelector(
    `img[data-id="${Number(currentId) + 1}"]`
  );
  if (e.target.classList.contains("lightbox__image")) {
    return;
  } else if (
    e.target.classList.contains("lightbox__button") ||
    e.target.classList.contains("lightbox__overlay")
  ) {
    refs.modal.classList.remove("is-open");
    cleanCurrentImg();
  } else if (e.target.classList.contains("prev") && currentId !== "0") {
    cleanCurrentImg();
    slide(prevImg);
  } else if (
    e.target.classList.contains("next") &&
    currentId !== `${imgs.length - 1}`
  ) {
    cleanCurrentImg();
    slide(nextImg);
  }
}
function closeModalByEsc(e) {
  if (e.code === "Escape") {
    refs.modal.classList.remove("is-open");
    cleanCurrentImg();
    window.removeEventListener("keydown", closeModalByEsc);
  }
}
function cleanCurrentImg() {
  refs.modalImg.setAttribute("src", "");
  refs.modalImg.setAttribute("data-id", "");
}
function slide(img) {
  refs.modalImg.setAttribute("src", img.getAttribute("data-source"));
  refs.modalImg.setAttribute("data-id", img.getAttribute("data-id"));
}
