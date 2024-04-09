// Programming Question :  Longest word string
/* The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string. */

const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;

  let arr = str.split(" ");
  //   arr = arr.sort((a, b) => b.length - a.length);
  //   console.log(arr);
  //   return arr[0];
  const ans = arr.reduce((acc, cur) => {
    return acc.length < cur.length ? cur : acc;
  }, "");

  return ans;
};

console.log(
  findLongestWord("Watch Thapa Techinical javascript course on youtube")
);
