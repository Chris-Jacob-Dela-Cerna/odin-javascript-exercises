const sumAll = function(x, y) {
  if (!(Number.isInteger(x)) || !(Number.isInteger(y)) ||x < 0 || y < 0) return "ERROR"; 
  const range = [x, y].sort((a, b) => a - b);
  let total = 0
  for (let i = range[0]; i <= range[1]; i++) {
    total += i
  }
  return total
};

// Do not edit below this line
module.exports = sumAll;