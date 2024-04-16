// Sort an Array

// Solution - 1
// const sortAscending = (arr) => {
//   return arr.sort((a, b) => a - b);
// };

// Solution - 2

const sortAscending = (arr) => {
  var n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    return arr;
  }
};

console.log(sortAscending([5, 3, 10, 8]));
