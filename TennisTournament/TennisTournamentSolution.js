function solution(P, C) {
    //Provide Your solution here 
const gamesNumber = Math.floor(P/2);
 if(gamesNumber >= C){
     return C;
 }else{
    return gamesNumber;
   }
}

module.exports = solution;