// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution #1
// helper function for creating characterMaps
// function setContainerObject(str) {
//   let strContainer = {};
//   // make the strings both lowercase and remove all special characters
//   for (const char of str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()) {
//     if (!strContainer[char]) {
//       strContainer[char] = 1;
//     } else {
//       strContainer[char]++;
//     }
//   }
//   return strContainer;
// }

// function anagrams(stringA, stringB) {
//   // INIT VARIABLES
//   let aContainer = setContainerObject(stringA);
//   let bContainer = setContainerObject(stringB);

//   if (Object.keys(aContainer).length !== Object.keys(bContainer).length) {
//     return false;
//   } else {
//     for (const key in aContainer) {
//       // insure that string is an anagram; return true
//       if (aContainer[key] !== bContainer[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// Solution #2
function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .toSplit[""].sort()
    .join("");
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
