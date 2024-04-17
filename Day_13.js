// Write a function that takes a string as input and returns the count of  vowels in that string.
// Consider 'a','e','i','o','u' as voewls(both  lowercase and uppercase)
// We use includes() to find character exist in the array or not
const countVowels = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];
  const arr = str.split("");
  let cnt = 0;

  for (char of arr) {
    if (vowel.includes(char.toLowerCase())) {
      cnt++;
    }
  }
  return cnt;
};

console.log(countVowels("Helloo world"));
console.log(countVowels("ThE quIck brOwn fOx"));
console.log(countVowels("Brrrp"));
