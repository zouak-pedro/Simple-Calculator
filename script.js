let screen = document.querySelector(".screen_calc");
let screenResult = document.querySelector(".screen_result");
let buttons = document.querySelectorAll(".buttons button");
let num1 = "";
let num2 = "";
let operator = "";
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-value");
    console.log(value);
    if (value === "C") {
      // Clear everything
      num1 = "";
      num2 = "";
      operator = "";
      screen.textContent = "0";
      screenResult.textContent = "";
      resultDisplayed = false;
    } else if (value === "=") {
      // Perform calculation
      if (num1 && num2 && operator) {
        let result = calculate(parseFloat(num1), parseFloat(num2), operator);
        screenResult.textContent = result;
        num1 = result.toString();
        num2 = "";
        operator = "";
        resultDisplayed = true;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Set the operator
      if (num1 && !num2) {
        operator = value;
        screen.textContent = "0";
      }
    } else {
      // Append numbers
      if (resultDisplayed) {
        num1 = "";
        resultDisplayed = false;
      }
      if (!operator) {
        num1 += value;
        screen.textContent = num1;
      } else {
        num2 += value;
        screen.textContent = num2;
      }
    }
  });
});

//addition, subtraction, multiplication, and division
const calculate = function (num1, num2, operator) {
  if ((operator === "/") & (num2 === 0)) return "Mathematical error";
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      brake;
    case "*":
      return num1 * num2;
      brake;
    case "/":
      return num1 / num2;
      brake;
    default:
      return 0;
  }
};

let namber1 = "p";
let namber2;
let operation;
let total_result;

const clickNam = function (nam) {
  namber1 + nam;
  console.log(namber1);
};
element.addEventListener("click", clickNam(nam));
