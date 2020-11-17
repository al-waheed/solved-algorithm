 function minimumSteps(stairs, maxPace) {
// write your code here ....
if(stairs[0] === 0 ){
   return `Stopped at position 0 with 0 step`;
}if(stairs[stairs.length-1] === 0){
  return `Stopped at position ${stairs.indexOf(0) + 1} with ${Math.ceil(stairs.length/maxPace)} step`;
}
let pace  = [];
for(let i = 0;i < stairs.length;i++){
   pace = i;
}
let steps = Math.ceil(pace /maxPace);
if(steps === 1 || steps === 0){
  return `Finished with ${steps} step`;
}
if(steps > maxPace || steps < maxPace){
    return `Finished with ${steps} steps`;
   }
}

module.exports = minimumSteps;
