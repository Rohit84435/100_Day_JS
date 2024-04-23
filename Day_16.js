// Find the minimum value in array
// (...) -> Is an spread operator that is used to expand an array into individual elements
// Soln: 1
const findMin1 = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc > cur) {
      acc = cur;
    }
    return acc;
  }, Number.MAX_VALUE);
};

// Soln : 2

const findMin = (arr) => {
  //   if (arr.length === 0) return "Empty";
  //   arr = arr.sort((a, b) => {
  //     if (a < b) return -1;
  //   });
  //   return arr[0];
  return Math.min(...arr);
};

console.log(findMin([5, 10, 8, 2]));
console.log(findMin([5, -3, 10, -7]));
console.log(findMin([]));
