var n = '3'


const fibonacci = function(n) {
  if(n < 0) return "OOPS"
  if(typeof n === 'string'){ 
    n = parseInt(n)
  }
  fibNumber1 = 0;
  fibNumber2 = 1;
  for(let i = 1; i <= n; i++){ 
    let next = fibNumber1 + fibNumber2
    fibNumber1 = fibNumber2 
    fibNumber2 = next
  }
  return fibNumber1 
};


console.log(fibonacci(n))

// Do not edit below this line
module.exports = fibonacci;



// # Exercise 14 - Fibonacci

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```
