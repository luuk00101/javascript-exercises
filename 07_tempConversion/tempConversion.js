const convertToCelsius = function (fahrenheit) {
  // the formula for fahrenheit -> celcius
  let celsius = (fahrenheit - 32) * (5 / 9);

  // round the number to one decimal
  celsius = Math.round(celsius * 10) / 10;

  return celsius;
};

const convertToFahrenheit = function (celsius) {
  // the formula for celsius -> fahrenheit
  let fahrenheit = celsius * (9 / 5) + 32;

  // round the number to one decimal
  fahrenheit = Math.round(fahrenheit * 10) / 10;

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
