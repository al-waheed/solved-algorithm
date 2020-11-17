//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  //Type your solutions here
  let arrSum = array.reduce((a, b) => parseFloat((a + b).toFixed(1)));
  let halfSum = arrSum / 2;
  let startVal = 0;

  if (halfSum !== 0) {
    for (let i = 0; i < array.length; i++) {
      startVal += array[i];
      if (startVal == halfSum) {
        return [i + 1, array.length - (i + 1)];
      }
    }
  }
  return -1;
}

module.exports = canBalance;