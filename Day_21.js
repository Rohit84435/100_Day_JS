// Meadian of array

const calculateMean = (arr) => {
  ans = arr.reduce((acc, cur) => (acc += cur), 0);
  return ans / arr.length;
};

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([10, 20, 30]));
