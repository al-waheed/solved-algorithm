
function evenlySpaced(first, second, last) {
    //Provide your solution here
    let sum = first + second;
    if(sum === last){
        return true;
    }else{
      return false;
    }
}

module.exports = evenlySpaced;