function wordCount(arrayOfStrings) {
let keyArr = {};
arrayOfStrings.map((ab) => {
keyArr[ab] = keyArr[ab] + 1 || 1;
});
 return keyArr;
}
module.exports = wordCount;