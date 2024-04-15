// Factorial of a number

// Solution - 1
// const fact = (num) => {
//   if (num <= 1) return num;

//   return num * fact(num - 1);
// };

// Solution - 2
const fact = (num) => {
  let ans = 1;
  while (num > 0) {
    ans *= num;
    num--;
  }
  return ans;
};

console.log(fact(5));
console.log(fact(8));
console.log(fact(6));
