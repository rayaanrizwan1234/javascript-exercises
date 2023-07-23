const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const amount = arr.reduce((total, num) =>{
    return total + num;
  }, 0);
  return amount;
};

const multiply = function(...args) {
  const mul = args.reduce((total, num) => {
  return total * num;
  }, 1);
  return mul;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  tot = 1;
  for (let i = 2; i <= a; i++){
    tot *= i
  }
  return tot;
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
