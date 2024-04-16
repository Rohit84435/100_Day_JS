// Calculate average of array

const calAvg = (arr) => {
  let ans = arr.reduce((acc, cur) => (acc += cur), 0);
  console.log(ans);
  return ans / arr.length;
};

console.log(calAvg([5, 10, 2, 8]));
