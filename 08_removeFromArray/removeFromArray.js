var array = [1,2,3,4,5]



const removeFromArray = function(array, ...args) {
  const newArray = []
  array.forEach((item) => { 
    if(!args.includes(item)) { 
      newArray.push(item)
    }
  })
  return newArray
};

console.log(removeFromArray(array, 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
