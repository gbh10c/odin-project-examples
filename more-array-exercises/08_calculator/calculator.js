const add = function(x, y) {
	let addResult = x + y;
  return addResult;
};

const subtract = function(x, y) {
	let subtractResult = x - y;
  return subtractResult;
};

const sum = function(array) {
	let sumResult = 0;
  for (let i = 0; i < array.length; i++) {
    sumResult += array[i];
  }
  return sumResult;
};

const multiply = function(array) {
  let multiplyResult = 1;
  for (let i = 0; i < array.length; i++) {
    multiplyResult *= array[i];
  }
  return multiplyResult;
};

const power = function(x, y) {
	let powerResult = x ** y;
  return powerResult;
};

const factorial = function(x) {
	let factorialResult = 1;
  for (let i = 1; i <= x; i++) {
    factorialResult *= i;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
