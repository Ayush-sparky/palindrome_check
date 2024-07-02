const inputField = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const resultPanel = document.querySelector("#result");

// Checking whether the input field is empty or not
// Returns true if the input field is not empty and vise versa
function checkInputNullorNot() {
  return inputField.value !== "";
}

// Function to remove any non-alphanumeric character such as (/, -, " ")
function removeNonAlphanumeric(str) {
  return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}

checkBtn.addEventListener("click", () => {
  let userInput = inputField.value;

  if (checkInputNullorNot()) {
    // Code below will only run when the checkInputNullorNot function returns true
    let cleanedValue = removeNonAlphanumeric(userInput);
    let reversedValue = cleanedValue.split("").reverse().join("");

    if (cleanedValue === reversedValue) {
      resultPanel.innerHTML = `<h2>${userInput} is a palindrome!!!</h2>`;
    } else {
      resultPanel.innerHTML = `<h2>${userInput} is not a palindrome</h2>`;
    }
  } else {
    // An alert message will pop if the checkInputNullorNot function returns false
    alert("Please input a value");
  }
});
