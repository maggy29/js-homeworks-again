import questions from "./tests-harry-questions.js";

const refs = {
  quesNumber: document.querySelector(".question-number"),
  quesTitle: document.querySelector(".question-title"),
  answContainer: document.querySelector(".answers"),
  answForm: document.querySelector(".answer-form"),
  backBtn: document.querySelector(".answer-back"),
  resCount: document.querySelector(".result-count"),
  resPoints: document.querySelector(".result-points"),
  resWrapper: document.querySelector(".results-wrapper"),
  resBtn: document.querySelector(".result-button"),
};

let current = 0;
const userChoice = [];

makeMarkup(questions[current], current);

refs.answForm.addEventListener("submit", handleAnswerSubmit);
refs.backBtn.addEventListener("click", handleBack);
refs.resBtn.addEventListener("click", handleCloseModal);

function handleAnswerSubmit(e) {
  e.preventDefault();
  if (refs.answForm.elements.answer.value !== "") {
    userChoice[current] = Number(e.target.elements.answer.value);
  } else {
    alert("Вы не ответили на вопрос, сделайте свой выбор");
    return;
  }
  if (questions.length === current + 1) {
    let correctNum = 0;
    let totalPoints = 0;
    questions.forEach((question, idx) => {
      if (question.correct === userChoice[idx]) {
        correctNum += 1;
        totalPoints += question.points;
      }
    });
    showResultsModal(correctNum, totalPoints);
  } else {
    current += 1;
    makeMarkup(questions[current], current);
  }
}

function showResultsModal(correctNum, totalPoints) {
  refs.resCount.textContent = correctNum;
  refs.resPoints.textContent = totalPoints;
  refs.resWrapper.classList.add("show");
}

function handleCloseModal() {
  refs.resWrapper.classList.remove("show");
}

function handleBack() {
  if (refs.answForm.elements.answer.value !== "") {
    userChoice[current] = Number(refs.answForm.elements.answer.value);
  } else {
    alert("Вы не ответили на вопрос, сделайте свой выбор");
    return;
  }

  if (current === 0) {
    return;
  }
  current -= 1;
  makeMarkup(questions[current], current);
}

function makeMarkup(question, idx) {
  refs.quesNumber.textContent = `Question ${idx + 1} (${
    question.points
  } points)`;
  refs.quesTitle.textContent = question.question;
  refs.answContainer.innerHTML = "";
  refs.answContainer.insertAdjacentHTML(
    "beforeend",
    question.answers.reduce(
      (acc, answer, idx) => (acc += makeOneQuestionOptionsMarkup(answer, idx)),
      ""
    )
  );
  refs.answForm.elements.answer.value = userChoice[idx];
}

function makeOneQuestionOptionsMarkup(answer, idx) {
  return `<label>
    <input type="radio" name="answer" value="${idx}" />
    <span>${answer}</span>
  </label>`;
}
