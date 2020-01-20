// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1.1 - Classic For Loop Syntax
// function reverse(str) {
//   let container = [];
//   let content = str.split("");
//   for (let i = 0; i < content.length; i++) {
//     container.unshift(content[i]);
//   }
//   return container.join("");
// }

// Solution #1.2 - Newer for of syntax
// function reverse(str) {
//   let container = [];
//   let content = str.split("");
//   for (const character of content) {
//     container.unshift(character);
//   }
//   return container.join("");
// }

// Solution #1.3 - Adding value to string method
// function reverse(str) {
//   let reversed = '';
//   for (const character of content) {
//     reversed = character + reversed;
//   }
//   return reversed
// }

// Solution #2
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Solution #3 - Utilizing the reduce array method
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;
