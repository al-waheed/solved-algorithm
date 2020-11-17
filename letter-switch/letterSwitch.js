function switchChar (inputChar, actualChar, changeChar){
 // Code goes here
 if(actualChar.length !== changeChar.length){ 
     return "Length mismatch";
 }
 let obj = {};
 let newChar = "";
 for(let i = 0; i < actualChar.length; i++) {
     if(obj.hasOwnProperty(obj[actualChar[i]])){
          return "Repeated value"
     }
     obj[actualChar[i]] = changeChar[i];
 }
 for(let j = 0;j < inputChar.length; j++){
    newChar = newChar + obj[inputChar[j]];
 }
 if(inputChar.length > changeChar.length  || newChar === 'undefined'){
       return -1;
 }
 return newChar;
}


module.exports = switchChar;
