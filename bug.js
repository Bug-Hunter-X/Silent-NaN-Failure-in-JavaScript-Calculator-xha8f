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
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return NaN; // Handle invalid operator
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 10, 4)); // Output: 6
console.log(operate('*', 7, 2)); // Output: 14
console.log(operate('/', 20, 5)); // Output: 4
console.log(operate('/', 10, 0)); // Throws an Error
console.log(operate('%', 10,3)); //Output: NaN