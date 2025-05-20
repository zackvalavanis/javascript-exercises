string = '!tit!'

const palindromes = function (string) {
  let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
  let stringy = cleanedString.split('').reverse().join('')
  return cleanedString === stringy
};

console.log(palindromes(string))

// Do not edit below this line
module.exports = palindromes;
