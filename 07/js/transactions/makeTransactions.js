import transHist from "./transactionsHistory.js";
const transTab = document.querySelector("#transTab");
const rowsMarkup = transHist.reduce(
  (acc, transaction) => (acc += makeTableRow(transaction)),
  ""
);
const table = `<table class="transaction-table"> <thead> <tr> <th>Type</th> <th>Amount</th> <th>Date</th> <th>Business</th> </tr> </thead><tbody> ${rowsMarkup}</tbody></table>`;
function makeTableRow({ type, amount, date, business }) {
  return `<tr><td>${type}</td><td>${amount}</td><td>${date}</td><td>${business}</td></tr>`;
}
transTab.insertAdjacentHTML("afterbegin", table);
