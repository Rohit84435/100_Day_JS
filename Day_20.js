// Reverse string

const rev = (str) => {
  let ans = "";

  for (i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }

  return ans;
};

console.log(rev("Hello"));
