// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution #1.1
// function palindrome(str) {
//   let reversedStr = str
//     .split("")
//     .reverse()
//     .join("");
//   if (str === reversedStr) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Solution #1.2
// function palindrome(str) {
//   let reversedStr = str
//     .split("")
//     .reverse()
//     .join("");
//   return str === reversedStr;
// }

// Solution #1.3
// function palindrome(str) {
//   let reversedStr =
//     str
//       .split("")
//       .reverse()
//       .join("") === str
//       ? true
//       : false;
//   return reversedStr;
// }

// Solution #2 - over engineered example that requires multiple iterations
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
