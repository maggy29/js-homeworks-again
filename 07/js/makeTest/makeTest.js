import questions from "./questions.js";

const testContainer = document.querySelector(".test");

const testMarkup =
  '<form class="test-form">' +
  makeTestMarkup(questions) +
  '<button class="button js-checkTestBtn" type="submit">Submit</button></form>';
testContainer.insertAdjacentHTML("beforeend", testMarkup);

const test = document.querySelector(".test-form");
test.addEventListener("submit", handleTestSubmit);

function handleTestSubmit(e) {
  e.preventDefault();

  const userData = [...test.elements]
    .filter((el) => el.checked)
    .map((el) => [el.dataset.id]);
  const results = checkTest(userData, questions);
  addClassList(results);
  makeAnswersReviewModal(results, questions);
  //makeReset(e, userData);
}
function checkTest(userData, servData) {
  const results = { result: [...userData], right: 0, wrong: 0 };

  servData.forEach((el, idx, arr) => {
    if (`${arr[idx].id}${arr[idx].answerIdx}` === userData[idx][0]) {
      results.result[idx].push(true);
      results.right += 1;
    } else {
      results.result[idx].push(false);
      results.wrong += 1;
    }
  });
  return results;
}
function addClassList({ result }) {
  const prevValidAnswers = test.querySelectorAll(".valid");
  prevValidAnswers.forEach((answer) => answer.classList.remove("valid"));
  const prevInvalidAnswers = test.querySelectorAll(".invalid");
  prevInvalidAnswers.forEach((answer) => answer.classList.remove("invalid"));
  result.forEach((res) => {
    const userChoiсe = test.querySelector(`input[data-id="${res[0]}"]`);
    const parentLabel = userChoiсe.closest("label");

    if (res[1]) {
      parentLabel.classList.add("valid");
    } else {
      parentLabel.classList.add("invalid");
    }
  });
}
function makeAnswersReviewModal({ right }, questions) {
  let modalText = "";
  if (right === questions.length) {
    modalText = "All Your answers are right!!! Well-done!!!";
  } else if (right / questions.length >= 0.5) {
    modalText = `You have ${right} right answer(s) from ${questions.length}! It is not bad, but You can show better results! Try again!`;
  } else if (right / questions.length < 0.5 && right !== 0) {
    modalText = `You have ${right} right answer(s) from ${questions.length}! Your results far from perfect, but You can try again and do Your best!`;
  } else {
    modalText =
      "You have no right answers... Do not panic! Keep calm and try again!";
  }

  const modalMarkup = `<div class="backdrop js-backdrop">
      <div class="modal">
        <h2>Your result</h2>
        <h4>${modalText}</h4>
        <button type="button" class="button" data-action="close-modal">
          Close
        </button>
      </div>
    </div>`;

  const prevModal = document.querySelector(".js-backdrop");
  if (prevModal) {
    prevModal.remove();
  }
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

function closeTestModal(modalText) {
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
  return vars.reduce((acc, el, idx) => acc + makeVarMarkup(id, el, idx), "");
}

function makeVarMarkup(id, el, idx) {
  return `<label class="label test__label">
    <input type="radio" class="radio" data-id="${id}${idx}" name="${id}" value="${el}" />
    ${el}
    </label>`;
}
