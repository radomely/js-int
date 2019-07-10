"use strict";

let userInput;
let inputAsNumber;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Enter a number");
  inputAsNumber = Number(userInput);
  if (isNaN(inputAsNumber) === false) {
    numbers.push(inputAsNumber);
  } else {
    alert("Not a number, try again");
  }
} while (userInput !== null);

for (let item of numbers) {
  total += item;
}

if (numbers.length !== 0) {
  alert(`The general sum is ${total}`);
}
