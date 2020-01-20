// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #1
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     // Case for index === argument value
//     if (i === n) {
//       let arr2 = [];
//       for (let index = 0; index < i; index++) {
//         arr2.push("#");
//       }
//       arr2.join("");
//       console.log(arr2.join(""));
//       // All other cases
//     } else {
//       let arr = [];
//       for (let index = 0; index < i; index++) {
//         arr.push("#");
//       }
//       for (let index = arr.length; index < n; index++) {
//         arr.push(" ");
//       }

//       console.log(arr.join(""));
//     }
//   }
// }

// Solution #2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// Solution #3 - Recursion
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps;

// Recursion Tips
// *Figure out the bare minimum pieces of information to represent your problem
// *Give reasonable defaults to the bare minimum pieces of information
// *Check the base case. Is there any work left to do? if not, return
// *Do some work, call your function again, making sure the arguements have changed in some fashion

// Example
// function printNumber(n, dec = 1){
//   if(n === 0){
//     return
//   }

//   console.log(n)
//   printNumber(n - dec)
// }

// printNumber(10)
