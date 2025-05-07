var number1 = 1;
var number2 = 5


const sumAll = function(number1, number2) {

  if(typeof(number1) !== 'number' || typeof(number2) !== 'number' || number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) { 
    return 'ERROR'
  }

  var sumTotal = 0;

  if(number1 > number2) { 
    [number1, number2] = [number2, number1]
  }

  for(let i = number1; i <= number2; i++){ 
    sumTotal += i
  }
  return sumTotal
};

console.log(sumAll(number1, number2))

// Do not edit below this line
module.exports = sumAll;
