const sumAll = function(x, y) {
  if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number') {
    return "ERROR";
  }
  let smallNum = 0;
  let largeNum = 0;
  if (x > y) {
    smallNum = y;
    largeNum = x;
  } else {
    smallNum = x;
    largeNum = y;
  }
  let finalSum = 0;
for (let i = smallNum; i <= largeNum; i++) {
  finalSum += i;
}
return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
