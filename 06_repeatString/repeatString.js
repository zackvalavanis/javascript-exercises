var times = 10;
var string = 'hello'



const repeatString = function(string, times) {
  if(times < 0) return ''
  let result = ''
  for(let i = 0; i < times; i++){ 
    result += string
  }
  return result
};

console.log(repeatString(string, times))

// Do not edit below this line
module.exports = repeatString;
