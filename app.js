function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a + b;
}

function subtract(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a - b;
}

function multiply(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a * b;
}

function divide(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "add": return add(a, b); break;
    case "subtract": return subtract(a, b); break;
    case "multiply": return multiply(a, b); break;
    case "divide": return divide(a, b); break;
    case "percentage": return percentage(a, b); break;
  }
}

function percentage(a, b) {
  let percent = a / 100;
  return percent * b;
}

const buttons = document.querySelectorAll('.disp');
const operators = document.querySelectorAll('.oper');
const input = document.querySelector('#input-box');
const answer = document.querySelector('#answer');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equals = document.querySelector('#equals');
let displayValue;
let firstNumber;
let operatorChosen;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    answer.innerHTML += button.textContent;
    displayValue = answer.innerHTML;
  });
});

operators.forEach((button) => {
  button.addEventListener('click', () => {
    if (input.innerHTML === '') {
      answer.innerHTML = '';
      input.innerHTML = displayValue;
      firstNumber = convertDisplay(displayValue);
      operatorChosen = button.id;
    } else {
      answer.innerHTML = operate(operatorChosen, firstNumber, convertDisplay(displayValue));
      firstNumber = answer.innerHTML;
      input.innerHTML = '';
    }
  });
});

function convertOperator(operator) {
  switch(operator) {
    case "add": return "+"; break;
    case "subtract": return "-"; break;
    case "multiply": return "×"; break;
    case "divide": return "÷"; break;
    case "percentage": return "%"; break;
  }
}

function convertDisplay(str) {
  return parseFloat(str.split(/\D/)[0]);
}

clear.addEventListener('click', () => {
  clearDisplayValue();
  firstNumber = null;
  operatorChosen = null;
});

backspace.addEventListener('click', () => {
  if (input.innerHTML !== '') {
    input.innerHTML = displayValue.slice(0, -1);
    displayValue = input.innerHTML;
  };
});

equals.addEventListener('click', () => {
  answer.innerHTML = '';
  input.innerHTML = '';
  let secondNumber = convertDisplay(displayValue);
  answer.innerHTML = operate(operatorChosen, firstNumber, secondNumber);
});

function clearDisplayValue() {
  displayValue = '';
  input.innerHTML = '';
  answer.innerHTML = '';
}