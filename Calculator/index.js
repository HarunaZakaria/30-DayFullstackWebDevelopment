function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(a, b, operator) {
  return operator(a, b);
}

myCaltulator = calculate(6, 4, divide);
console.log(myCaltulator);
