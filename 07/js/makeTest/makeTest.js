import questions from "./questions.js";

const testContainer = document.querySelector(".test");

const testMarkup =
  '<form class="test-form">' +
  makeTestMarkup(questions) +
  '<button class="button js-checkTestBtn" type="submit">Submit</button></form>';
testContainer.insertAdjacentHTML("beforeend", testMarkup);

const test = document.querySelector(".test-form");
test.addEventListener("submit", handleCheckTest);

function handleCheckTest(e) {
  e.preventDefault();
  const userData = [...test.elements]
    .filter((el) => el.checked)
    .map((el) => el.value);
  const answerData = questions.map(({ answer }) => answer);
  makeAnswersReviewModal(questions, userData);
}

function makeAnswersReviewModal(dataServ, dataUser) {
  let right = 0;
  let wrong = 0;
  let modalText = "";
  dataServ.forEach((el, idx, arr) => {
    if (arr[idx].answer === dataUser[idx]) {
      right += 1;
    } else {
      wrong += 1;
      modalText += `<p>Your answer "${dataUser[idx]}" on question "${el.question}" is not correct. Try again!</p>`;
    }
  });
  modalText += `<h4>You have ${right} right answers from ${dataServ.length}!</h4>`;
  const modalMarkup = `<div class="backdrop js-backdrop">
      <div class="modal">
        <h2>Your result</h2>
        ${modalText}
        <button type="button" class="button" data-action="close-modal">
          Close
        </button>
      </div>
    </div>`;
  testContainer.insertAdjacentHTML("afterbegin", modalMarkup);
  openTestModal();
  const closeTestModalBtn = document.querySelector(
    '[data-action="close-modal"]'
  );
  closeTestModalBtn.addEventListener("click", closeTestModal);
  const backdrop = document.querySelector(".js-backdrop");
  backdrop.addEventListener("click", closeTestModalByBackdrop);
}

function openTestModal() {
  document.body.classList.add("show-modal");
  window.addEventListener("keydown", closeTestModalByEsc);
}

function closeTestModal() {
  document.body.classList.remove("show-modal");
}

function closeTestModalByBackdrop(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  closeTestModal();
}

function closeTestModalByEsc(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeTestModal();
  window.removeEventListener("keydown", closeTestModalByEsc);
}

function makeTestMarkup(tests) {
  return tests.reduce((acc, test) => (acc += makeOneTestMarkup(test)), "");
}

function makeOneTestMarkup({ id, question, vars }) {
  return `<p>${question}</p>${makeVarsMarkup(id, vars)}`;
}

function makeVarsMarkup(id, vars) {
  return vars.reduce((acc, el) => acc + makeVarMarkup(id, el), "");
}

function makeVarMarkup(id, el) {
  return `<label class="label test__label">
    <input type="radio" class="radio" name="${id}" value="${el}" />
    ${el}
    </label>`;
}
