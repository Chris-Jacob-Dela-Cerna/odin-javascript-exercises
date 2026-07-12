const repeatString = function(str, dupe) {
  let fullStr = ""
  if (!(dupe < 0)) {
    for (let i = 0; i < dupe; i++) {
      fullStr += str
    }
    return fullStr
  } else {
    return 'ERROR'
  }
  
};

// Do not edit below this line
module.exports = repeatString;