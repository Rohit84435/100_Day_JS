// Write a function to convert a string to camelCase & snake_case

const toCamelCase = (str) => {
  str = str.toLowerCase();
  arr = str.split(" ");
  console.log(arr);
  ans = arr.map((cur, idx) => {
    if (idx === 0) return cur;
    else {
      return cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase();
    }
  });
  return ans.join("");
};

console.log(toCamelCase("hello world thApa"));
