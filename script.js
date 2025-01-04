let screen = document.querySelector(".screen_calc");
let buttons = document.querySelectorAll(".buttons button");
let num1 = "";
let num2 = "";
let operator = "";
let resultDisplayed = false;

//addition, subtraction, multiplication, and division
const calculate = function (num1, operator, num2) {
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
