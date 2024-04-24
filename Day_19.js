// Write a function to check if a given string starts with a specific substring

// const startsWith = (sen, str) => {
//   sen = sen.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (sen[i] != str[i]) return false;
//   }
//   return true;
// };

const startsWith = (sen, str) => {
  return sen.slice(0, str.length).toLowerCase() === str.toLowerCase();
};

console.log(startsWith("Hello World", "hello"));
console.log(startsWith("Hello World", "world"));
