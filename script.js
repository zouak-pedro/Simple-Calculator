//addition, subtraction, multiplication, and division
const calculator = function (num1, operation, num2) {
  if ((operation === "division") & (num2 === 0)) return "Mathematical error";
  switch (operation) {
    case "addition":
      return num1 + num2;
      break;
    case "subtraction":
      return num1 - num2;
      brake;
    case "multiplication":
      return num1 * num2;
      brake;
    case "division":
      return num1 / num2;
      brake;
    default:
      return;
  }
};

let screen_num1 = document.querySelector(".screen-num1");

let namber1 = screen_num1.innerHTML;
let namber2;
let operation;
let total_result;
