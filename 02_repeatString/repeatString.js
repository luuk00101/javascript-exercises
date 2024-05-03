const repeatString = function (string, numberOfTimes) {
  if (numberOfTimes < 0) return "ERROR";

  let newString = "";

  for (let i = 0; i < numberOfTimes; i++) {
    newString += string;
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
