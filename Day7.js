// Write a function to find maximum number in an array
// Sperade operator -> ... spreads number in array

// Solution - 1
const findMax = (arr) => {
  let maxi = arr.reduce((acc, cur) => {
    if (acc < cur) acc = cur;

    return acc;
  }, -99999);

  return maxi;
};

// Solution - 2
const findMax1 = (arr) => {
  return Math.max(...arr);
};

console.log(findMax1([1, 5, 3, 9, 2]));
console.log(findMax1([-10, -5, -3, -9, -2]));
console.log(findMax1([5]));
