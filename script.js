const inputField = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const resultPanel = document.querySelector("#result");

function checkInputNullorNot() {
  return inputField.value !== "";
}

function removeNonAlphanumeric(str) {
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}

checkBtn.addEventListener("click", () => {
  let userInput = inputField.value;

  if (checkInputNullorNot()) {
    let cleanedValue = removeNonAlphanumeric(userInput);
    let reversedValue = cleanedValue.split("").reverse().join("");

    if (cleanedValue === reversedValue) {
      resultPanel.innerHTML = `<h2>${userInput} is a palindrome!!!</h2>`;
    } else {
      resultPanel.innerHTML = `<h2>${userInput} is not a palindrome</h2>`;
    }
  } else {
    alert("Please input a value");
  }
});
