// Write a function to calculate the sum of squares of all elements in an array.
// For example, given the array [1, 2, 3] the function should return 14 .

const sumOfSquare = (arr) => {
  return arr.reduce((acc, cur) => (acc += cur * cur), 0);
};

console.log(sumOfSquare([1, 2, 3]));
