//The Encoder function takes two arrays as its parameters, raw and c.
//This function replaces the words in `raw` with the words in `c` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw,c) {
  
let temp = {};
let newWord = [];
for(let i = 0; i < raw.length; i++){
 if(Object.keys(temp).includes(raw[i])){
   newWord.push(temp[raw[i]]);
 } else{
   temp[raw[i]] = c[i];
   newWord.push(c[i]);
 }
}
return newWord;
}
module.exports = encoderSolution;