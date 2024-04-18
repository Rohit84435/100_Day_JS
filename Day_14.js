// Write a function called isPowerOfTwo that takes an integer num as input and returns
// true if num is power of two and false if not.

const isPowerOfTwo = (n) => {
  if (n <= 0) return 0;

  if ((n & (n - 1)) == 0) return 1;
  return 0;
};
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
