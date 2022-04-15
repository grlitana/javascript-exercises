const ftoc = function(fahrenheit) {
  // multiplies to 10, rounds up to integer, then divides by 10
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const ctof = function(celcius) {
  // multiplies to 10, rounds up to integer, then divides by 10
  return Math.round(((celcius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
