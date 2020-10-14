// Sum the digits of a number
// e.g. If the number is 23, the output would be 5

const sumOfDigits = (n) => {
  let sum = 0;
  n = Math.abs(n);
  while (n > 0) {
    const current = n % 10;
    sum += current;
    n = Math.floor(n / 10);
  }
  return sum;
}


 module.exports = {sumOfDigits};