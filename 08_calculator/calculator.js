const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((prev, curr) => {
    return prev + curr;
  }, 0)
};

const multiply = function(array) {
	return array.reduce((prev, curr) => {
    return prev * curr;
  }, 1)
};

const power = function(x, n) {
  if (n == 0) return 1

  let pow = 1
  for (let i = 0; i < n; i++) {
    pow *= x
  }
  return pow
};

const factorial = function(n) {
  if (n == 0 || n == 1) return 1

  let factorial = n;
  for (let i = n - 1; i > 0; i--) {
    factorial *= i; 
  }
  return factorial
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
