// Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the
// the array  are equal

// We use every((currentValue,index)=>{})

const arrayAreEqual = (arr1, arr2) => {
  n1 = arr1.length;
  n2 = arr2.length;
  if (n1 != n2) return false;
  return arr1.every((curVal, idx) => curVal === arr2[idx]);
};
console.log(arrayAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arrayAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arrayAreEqual([], []));
