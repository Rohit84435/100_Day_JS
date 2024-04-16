// Count the occurance of character

// Solution - 1
// const countChar = (str, char) => {
//   const arr = str.split("");
//   let ans = 0;
//   for (it of arr) {
//     if (it.toLowerCase() === char.toLowerCase()) ans++;
//     // console.log(it.toLowerCase());
//   }

//   console.log(arr);
//   return ans;
// };

// Solution - 2
const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();
  arr = str.split("");
  ans = arr.reduce((acc, cur) => {
    if (cur === char) acc++;

    return acc;
  }, 0);

  return ans;
};

console.log(countChar("MissIssipi", "I"));
