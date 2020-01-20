// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution #1.1
// function maxChar(str) {
//   let arr = str.split("");
//   let characters = {};
//   let max = 0;
//   let maxChar = "";

//   for (const char of arr) {
//     if (!characters[char]) {
//       characters[char] = 1;
//     } else {
//       characters[char]++;
//     }
//   }

//   for (const char in characters) {
//     if (characters[char] > max) {
//       max = characters[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// Solution #1.2
function maxChar(str) {
  let characters = {};
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    !characters[char] ? (characters[char] = 1) : characters[char]++;
  }

  for (const char in characters) {
    if (characters[char] > max) {
      max = characters[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
