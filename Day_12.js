// Write a function that takes an array if integers as input and removes any duplicate elements,
// returning a new array with only the unique elements in same order.

// Used Set -> It contain only unique elements ' new Set()' its type is object
const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

console.log(removeDuplicates([1, 4, 3, 2, 1, 2]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));
