function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case add: return add(a, b); break;
    case subtract: return subtract(a, b); break;
    case multiply: return multiply(a, b); break;
    case divide: return divide(a, b); break;
  }
}

function percentage(a, b) {
  let percent = a / 100;
  return percent * b;
}

const buttons = document.querySelectorAll('.disp');
const input = document.querySelector('#input-box');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equals = document.querySelector('#equals');
let displayValue;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    input.innerHTML += button.textContent;
    displayValue = input.innerHTML;
  });
});

clear.addEventListener('click', () => {
  input.innerHTML = '';
});

backspace.addEventListener('click', () => {
  if (input.innerHTML !== '') {
    input.innerHTML = displayValue.slice(0, -1);
    displayValue = input.innerHTML;
  };
});

equals.addEventListener('click', () => {
  let array = displayValue.split(/(\D)/g);
  array.reduce((a, b) => {

  });
});
