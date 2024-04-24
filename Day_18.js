// Write a function to check if a character is uppercase or lower

const isUpper = (str) => {
  if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) return true;
  return false;
};
const isLower = (str) => {
  if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) return true;
  return false;
};

console.log(isUpper("A"));
console.log(isLower("B"));
console.log(isLower("b"));
