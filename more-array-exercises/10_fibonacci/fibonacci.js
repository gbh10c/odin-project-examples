const fibonacci = function(n) {
  n = parseInt(n);
  let x = 1;
  let y = 1;
  let total = 0;
  let finalNum = 1;
  if (n < 0) {
    return "OOPS";
  }
  for (i = 1; i < n - 1; i++) {
    total = y + x;
    finalNum = total;
    x = y;
    y = total;
  }
  return finalNum;
};

/*const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};*/

// Do not edit below this line
module.exports = fibonacci;
