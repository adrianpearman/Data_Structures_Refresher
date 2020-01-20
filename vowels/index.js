// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #1
// function vowels(str) {
//   let counter = 0;
//   let arr = str.toLowerCase().split("");
//   for (const letter of arr) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       counter = counter + 1;
//     }
//   }
//   return counter;
// }

// Solution #1.2
// function vowels(str) {
//   let counter = 0;
//   for (const characters of str.toLowerCase()) {
//     if (
//       characters.includes("a") ||
//       characters.includes("e") ||
//       characters.includes("i") ||
//       characters.includes("o") ||
//       characters.includes("u")
//     ) {
//       counter = counter + 1;
//     }
//   }

//   return counter;
// }

// Solution #1.3
// function vowels(str) {
//   let counter = 0;
//   let vowelList = "aeiou";
//   for (const characters of str.toLowerCase()) {
//     if (vowelList.includes(characters)) {
//       counter++;
//     }
//   }

//   return counter;
// }

// Solution #1.4
// function vowels(str) {
//   let counter = 0;
//   let vowelList = ["a", "e", "i", "o", "u"];
//   for (const characters of str.toLowerCase().split("")) {
//     if (vowelList.includes(characters)) {
//       counter++;
//     }
//   }

//   return counter;
// }

// Solution #2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;
