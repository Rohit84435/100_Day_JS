// Write a function to determine whether a given string is a palindrome or not.
// Use of RegX to remove non-alphabtes with space

const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");

  let r_str = str.split("").reverse().join("");
  //   console.log(str);
  return str === r_str ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
