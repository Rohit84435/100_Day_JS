// Write a function that takes a number as input and returns the sum of its  digits.

const sumOfDigits = (num) => {
  arr = Array.from(String(num), Number);
  console.log(arr);
  return arr.reduce((acc, cur) => (acc += cur), 0);
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(1234567));
