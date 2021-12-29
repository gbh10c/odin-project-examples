const ftoc = function(f) {
  let cResultTemp = (f - 32) * (5/9);
  let cFinalTemp = cResultTemp.toFixed(1);
  return Number(cFinalTemp);
};

const ctof = function(c) {
  let fResultTemp = c * (9/5) +32;
  let fFinalTemp = fResultTemp.toFixed(1);
  return Number(fFinalTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
