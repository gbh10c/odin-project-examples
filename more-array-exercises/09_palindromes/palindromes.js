const palindromes = function (string) {
  let palindromeStatus = null;
  let newString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let lowerString = newString.toLowerCase();
  let newArray = lowerString.split("");
  let noSpaceArray = newArray.filter(entry => entry.trim() != '');
  
  for (let i = 0; i < Math.floor((noSpaceArray.length - 1)/2); i++) {
    if (noSpaceArray[i] !== noSpaceArray[(noSpaceArray.length - 1) - i]) {
      palindromeStatus = false;
    } else {
      palindromeStatus = true;
    }
  }
  return palindromeStatus;
};

// Do not edit below this line
module.exports = palindromes;
