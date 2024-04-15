// Write a function to determine whether a given string is a palindrome or not.
// Use of RegX to remove non-alphabtes with space
// Join function -> The join() method concatenates all of the elements in an array (or an array-like object),
//                  separated by commas or a specified separator string, and returns a new string.

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");

  let r_str = str.split("").reverse().join("");
  //   console.log(str);
  return str === r_str ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
