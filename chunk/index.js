// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution #1
// function chunk(array, size) {
//   // set variable for empty array
//   const chunked = [];
//   // loop through array provided to function
//   for (let element of array) {
//     // grabbing the last element in the provided array
//     const last = chunked[chunked.length - 1];
//     // if there is no value in an array or the array is not equal to the size argument
//     if (!last || last.length === size) {
//       // push that value into the chunked variable
//       chunked.push([element]);
//     } else {
//       // else push that value onto the last variable
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// Solution #2
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
