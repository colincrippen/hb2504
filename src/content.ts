import browser from "webextension-polyfill";

console.log("Content script loaded!");

const findProfessorsFromPlan = (): void => {
  const instructorCells = document.querySelectorAll("td[data-property='instructor']");

  instructorCells.forEach(cell => {
    const nameLink = cell.querySelector("a.email");
    console.log(nameLink?.textContent);
  });
};

findProfessorsFromPlan();