function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let rounded = parseFloat((a+b).toFixed(4));
  return rounded;
}

function subtract(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let rounded = parseFloat((a-b).toFixed(4));
  return rounded;
}

function multiply(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let rounded = parseFloat((a*b).toFixed(4));
  return rounded;
}

function divide(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let rounded = parseFloat((a/b).toFixed(4));
  return rounded;
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
  let rounded = parseFloat((percent*b).toFixed(4));
  return rounded;
}

const numbers = document.querySelectorAll('.disp');
const operators = document.querySelectorAll('.oper');
const input = document.querySelector('#input-box');
const answer = document.querySelector('#answer');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const equals = document.querySelector('#equals');
let displayValue;
let firstNumber;
let operatorChosen;
let stringed;
let over;
let temp = '';
let buttonsToggle = false;

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    buttonsToggle = true;
    if (!stringed && !over) {
      answer.innerHTML += number.textContent;
      displayValue = answer.innerHTML;
    } else if (stringed) {
      answer.innerHTML = '';
      temp += number.textContent;
      answer.innerHTML += temp;
      displayValue = answer.innerHTML;
    } else if (over) {
      answer.innerHTML = '';
      temp += number.textContent;
      answer.innerHTML += temp;
      displayValue = answer.innerHTML;
    }
  });
});

let opFunc = function(e) {
  if (buttonsToggle) {
    stringed = false;
  if (input.innerHTML === '') {
    answer.innerHTML = '';
    operatorChosen = e.target.id;
    input.innerHTML = `${displayValue}${convertOperator(operatorChosen)}`;
    firstNumber = displayValue;
    temp = '';
  } else {
    if (operatorChosen === "divide" && displayValue == 0) {
      displayValue = 1;
      alert("Not allowed to divide by zero! Input changed to 1.");
    };
    answer.innerHTML = operate(operatorChosen, firstNumber, displayValue);
    firstNumber = answer.innerHTML;
    operatorChosen = e.target.id;
    input.innerHTML = `${firstNumber}${convertOperator(operatorChosen)}`;
    stringed = true;
    temp = '';
  }
  buttonsToggle = false;
  };
};

operators.forEach((button) => {
  button.addEventListener('click', opFunc);
  
});

function convertOperator(operator) {
  switch(operator) {
    case "add": return "+"; break;
    case "subtract": return "-"; break;
    case "multiply": return "×"; break;
    case "divide": return "÷"; break;
    case "percentage": return "% of"; break;
  }
}

function convertDisplay(str) {
  return parseFloat(str.split(/[-+%×÷]/)[0]);
}

clear.addEventListener('click', () => {
  clearDisplayValue();
  firstNumber = null;
  operatorChosen = null;
  stringed = false;
  temp = '';
});

backspace.addEventListener('click', () => {
  if (answer.innerHTML !== '') {
    answer.innerHTML = displayValue.slice(0, -1);
    displayValue = answer.innerHTML;
  };
});

equals.addEventListener('click', () => {
  if (answer.innerHTML !== '') {
    answer.innerHTML = '';
    input.innerHTML = '';
    let secondNumber = convertDisplay(displayValue);
    if (operatorChosen === "divide" && secondNumber === 0) {
      secondNumber = 1;
      alert("Not allowed to divide by zero! Input changed to 1.");
    }
    answer.innerHTML = operate(operatorChosen, firstNumber, secondNumber);
    displayValue = answer.innerHTML;
    stringed = false;
    over = true;
    temp = '';
  } 
});

function clearDisplayValue() {
  displayValue = '';
  input.innerHTML = '';
  answer.innerHTML = '';
}