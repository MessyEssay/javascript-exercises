const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit-32)*.556)*10)/10
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius*1.8)+32)*10)/10
};
//Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

// Do not edit below this line
//console.log('To Celsius '+convertToCelsius(32) )
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
