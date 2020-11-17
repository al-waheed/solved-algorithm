function highestNumPosition(array) {
  // write you code here...
  if (array.length === 0) {
    return [0, 0];
  }
  let highest = array[0][0];
  let index = [0, 0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > highest) {
           highest = array[i][j];
            index = [i, j];
      }
    }
  }
  return index;
}
module.exports = highestNumPosition;