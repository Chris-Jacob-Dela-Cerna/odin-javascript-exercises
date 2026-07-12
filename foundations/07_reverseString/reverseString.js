const reverseString = function(str) {
  let letters = []
  for (let i = 0; i < str.length; i++) {
    letters.push(str[i])
  }
  return letters.reverse().join("")
};

// Do not edit below this line
module.exports = reverseString;