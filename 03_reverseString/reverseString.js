const reverseString = function (inputString) {
  const stringArray = inputString.split("");

  let newString = "";

  for (i = stringArray.length - 1; i >= 0; i--) {
    newString += stringArray[i];
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
