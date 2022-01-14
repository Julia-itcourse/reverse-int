module.exports = function reverse(n) {
  const absoluteNumber = Math.abs(n);
  const reversedArr = Array.from(absoluteNumber.toString(), Number).reverse();
  console.log("revArr", reversedArr);
  const result = Number(reversedArr.join(""));
  return result;
};
