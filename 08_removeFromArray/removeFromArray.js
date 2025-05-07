var array = [1,2,3,4,5]



const removeFromArray = function(array) {
  let result = new Array(...array)
  return result
};

console.log(removeFromArray(array))

// Do not edit below this line
module.exports = removeFromArray;
