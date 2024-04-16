// Hash Tag Generator

// Solution - 1
// const generateHash = (str) => {
//   if (str.length > 280 || str.trim().length === 0) return false;
//   arr = str.split(" ");
//   arr = arr.map((cur) => cur.replace(cur[0], cur[0].toUpperCase()));
//   arr = arr.reduce((acc, cur) => (acc += cur), "");
//   //   console.log(arr);
//   return `#${arr}`;
// };

// Solution - 2
const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) return false;
  arr = str.split(" ");
  arr = arr.map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1));
  arr = arr.join("");
  //   console.log(arr);
  return `#${arr}`;
};

console.log(generateHash("my name is rohit kumar"));
