const prompt = require("prompt-sync")(); // Please don't touch me :)

// // taking the first number
let num1 = prompt("Please enter the first number:");
let num2;
let operation;
let result;

if (isNaN(num1) || num1 == "") {
  console.log("Oops! Please enter a valid number");
  return;
} else {
  num1 = parseFloat(num1);
  num2 = prompt("Please enter the second number:");
  if (isNaN(num2)) {
    console.log("Oops! Please enter a valid number");
    return;
  } else {
    num2 = parseFloat(num2);
    operation = prompt("Please choose the operation (+, -, /, *):");
    if (
      operation !== "+" &&
      operation !== "-" &&
      operation !== "/" &&
      operation !== "*"
    ) {
      console.log("Oops! Please enter a valid operation method");
    } else {
      switch (operation) {
        case "+":
          result = Number(num1) + Number(num2);
          break;

        case "-":
          result = num1 - num2;
          break;

        case "/":
          result = Number(num1) / Number(num2);
          break;
        case "*":
          result = Number(num1) * Number(num2);
          break;

        default:
          break;
      }
      console.log(`${num1} ${operation} ${num2} = ${result}`);
    }
  }
}

// const num1 = isNaN(prompt("whats your first number?"));

// console.log(typeof num1, num1);
