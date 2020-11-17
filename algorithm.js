function sum(){
    var arrays = [1,2,3,4];
    var result = arrays.reduce(function (total, num) {
      return total + num;
  });
  console.log(result);
}

// Create a funtion called isIsogram that takes one argument, a word to 
// test if it's an isogram. This function should return a boolean indicating 
// whether it is an isogram (true) or not (false).

// Example:

// isIsogram("Dermatoglyphics")
// Expected result:

// true


// ---solution---

function isIsogram(word){

  if (!word || 0 === word.length){
    return false
  }

  var passed = true;

  neWord = escape(word).toLowerCase();

  var counts = {};

  for (var i = 0; i <= neWord.length; i++) {
    var letter = neWord.toString().charAt(i)

    if (counts[letter]) {
      counts[letter] += 1
    }
    else {
      counts[letter] = 1
    }

    if (counts[letter] > 1) {
      return passed = false
    }
  }

  return passed
}

isIsogram("Dermatoglyphics")

// Create a class called ShoppingCart.

// Create a constructor that has no arguments and sets the total attribute to zero, and initializes an empty dict attribute named items.

// Create a method add_item that requires item_name, quantity and price arguments. This method should add the cost of the added items to the current value of total. It should also add an entry to the items dict such that the key is the item_name and the value is the quantity of the item.

// Create a method remove_item that requires similar arguments as add_item. It should remove items that have been added to the shopping cart and are not required. This method should deduct the cost of these items from the current total and also update the items dict accordingly. If the quantity of items to be removed exceeds current quantity in cart, assume that all entries of that item are to be removed.

// Create a method checkout that takes in cash_paid and returns the value of balance from the payment. If cash_paid is not enough to cover the total, return Cash paid not enough.

// Create a class called Shop that has a constructor which initializes an attribute called quantity at 100.

// Make sure Shop inherits from ShoppingCart.

// In the Shop class, override the remove_item method, such that calling Shop's remove_item with no arguments decrements quantity by one.

// JavaScript

// use camel case for your class method names, such that

//     add_item 
// becomes

//     addItem
//  ----solution---



class ShoppingCart{
  constructor(){
    this.total = 0;
    this.items = {};
  }
  
  addItem(item_name, quantity, price) {
    var cost = price * quantity;
    this.total = this.total + cost;
      this.items[item_name] = quantity; 
  }
  
  
  removeItem(item_name, quantity, price){
   var cost = price * quantity;
    this.total = this.total - cost;
    
    if (quantity < this.items[item_name] && quantity > 0){
               this.items[item_name] -= quantity;
        
      }else if( quantity >= this.items[item_name]){
           this.total -= price*this.items[item_name];
           delete this.items[item_name];

      }

    
  }
  checkout(cash_paid){
    if (cash_paid >= this.total){
           return cash_paid - this.total;
    }
       return "Cash paid not enough";}

  }
  
class Shop extends ShoppingCart {
    constructor(){
      
       super();
      this.quantity = 100;
    }
      removeItem(){
         this.quantity -=1;
      }
    }


    // Write a function named power that accepts two arguments, a and b and calculates a raised to the power b.

function power(a,b){
  if (b==0){
    return 1
  }else {return a * power(a,b-1)}
}

// or


function power(num, exponent) {
      var result = 1;
      for (i = 0; i < exponent; i++) {
      result *= num;
      }
      return result;
  } 


5
// Write a function called longest which will take a string of space separated words and will return the longest one.

// For example:

// longest("This is Andela")
// returns
// "Andela"
// and
// longest("Brilliance is evenly distributed")
// returns
// distributed


// .....solution...

function longest(sentence){
  var longword  = '';
  
  var word= sentence.split(" ");
  for (var i = 0; i < word.length; i++){
    if(word[i].length > longword.length){
      
      longword = word[i] ;
    }
    
    
  }
 return longword; 
}


// JavaScript

// Write a mySort function which takes in an array integers, and should return an array of the inputed integers sorted such that the odd numbers come first and even numbers come last.

// For exampl1e:

// mySort( [90, 45, 66, 'bye', 100.5] )
// should return

// [45, 66, 90, 100]


// .....solution......
function mySort(nums){
  
   var even =[];
  var odd = [];
  for(var i = 0; i < nums.length; i++){
    if(typeof nums[i] !== 'number'){
      nums.splice(i, 1);
    }
    
    nums[i] = parseInt(nums[i], 10);
    
      if ((nums[i] % 2) === 0){
    even.push(nums[i]);
        }else{
       odd.push(nums[i]);
     }
  }
  
 var a = odd.sort(function(c, d){return c-d}); 
  var b = even.sort(function(c, d){return c-d});
  
 return a.concat(b);
}

// Write a function which will take one string argument containing characters between a-z, and should remove all repeated characters (dupliactaes) in the string.

var set = {};
function removeDuplicates(str){
  var a = [];
 var unique='';
    for(var i=0; i<str.length; i++){
        if(unique.indexOf(str[i])==-1){
          console.log(str[i] + unique);
            unique =unique + str[i];
        }else{
a.push(str[i]);
        }
    }
    set.unique = unique;
    set.unUnique = a.length;
    return set;
}
removeDuplicates('aaabbbac')

function removeDuplicates(str){
  str = str.split("").sort( case_insensitive_comp ).join("");
  var set = {};
  var duplicate= [];
 var unique='';
    for(var i=0; i<str.length; i++){
        if(unique.indexOf(str[i])==-1){
          console.log(str[i] + unique);
            unique =unique + str[i];
        }else{
duplicate.push(str[i]);
        }
    }
    set.uniques= unique.replace(/[^A-Za-z]/g, "");
    set.duplicates = duplicate.length;
    return set;
}
removeDuplicates('aaabbbac');


function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}

let set ={};

const arr = ['a', 'a','b', 'c','c','c'];
arr.forEach(function(el){
    set[el] = set[el] + 1 || 1
;
});
console.log(set);

//ouput  { a: 2, b: 1, c: 3 }

// Write a function that takes time in 12 hour AM/PM format and convert it to 24 hour time format
// and vice versa. Eg. 12:00:00 AM will return 00:00:00, 07:45:15 PM will return 19:45:15 and vice
// versa. Make sure you account for invalid time format.   https://repl.it/MVoL/9



function convertTo24Hour(time){
 
 let separateMeridiem = time.split(" ");   // ["12:00:00", "AM"]
  
time = separateMeridiem[0].split(":");        //  ["12", "00", "00"]
   
  
if(time[0] == 12  &&  separateMeridiem[1] === 'AM'){

time[0] = parseInt(time[0])  - 12 ;
  
}else
 if(time[0] == 12  &&  separateMeridiem[1] == 'PM'){
time[0] =  parseInt(time[0]) + 0;
  
}else
 if(time[0] < 12  &&  separateMeridiem[1]=== 'AM'){
 
    time[0] =  parseInt(time[0]) + 0;
  
}
if(time[0] < 12  &&  separateMeridiem[1]=== 'PM'){

time[0] = parseInt(time[0]) + 12 ;
  
}
  
let convertedTime = time[0] + ':' + time[1] + ':' + time[2];
return convertedTime;
  
 
} 
 
convertTo24Hour('07:45:15 PM');  
 
 
function convertTo12Hour(time1){
   
    
let time = time1.split(":");
    
let  meridiem = 'AM';

    
if (time[0] >= 12) {
       
meridiem  = 'PM';
    
}

    
if (time[0] > 12) {
        
time[0] = time[0] - 12;
}
convertedT024Hour = time[0] + ':' + time[1] + ':' + time[2] + ' ' + meridiem;
return convertedT024Hour;

}

convertTo12Hour('18:00:00');
 
function convertTo24Hour(time12hours){
  let separateMeridiem = time12hours.split(" ");    // ["12:00:00", "AM"]
  time = separateMeridiem[0].split(":");            //["12", "00", "00"]
   
  if(time[0] == 12  &&  separateMeridiem[1] === 'AM'){
    time[0] = parseInt(time[0])  - 12 ;
  }else
  
  if(time[0] == 12  &&  separateMeridiem[1] == 'PM'){
    time[0] =  parseInt(time[0]) + 0;
  }else
  
  if(time[0] < 12  &&  separateMeridiem[1]=== 'AM'){
     time[0] =  parseInt(time[0]) + 0;
  }
  
  if(time[0] < 12  &&  separateMeridiem[1]=== 'PM'){
     time[0] = parseInt(time[0]) + 12 ;
  }
  
  let convertedTime = time[0] + ':' + time[1] + ':' + time[2];
  
  return convertedTime;
  
 } 

 function convertTo12Hour(time24hours){
   
    let time = time24hours.split(":");
    let  meridiem = 'AM';

    if (time[0] >= 12) {
       meridiem  = 'PM';
    }

    if (time[0] > 12) {
        time[0] = time[0] - 12;
    }

    convertedT024Hour = time[0] + ':' + time[1] + ':' + time[2] + ' ' + meridiem;

    return convertedT024Hour;
}

convertTo24Hour('07:45:15 PM'); 
//convertTo12Hour('18:00:00');

let userInput = prompt("Write in and press ok");
let processInput = (((userInput.split('')).sort()).filter(item => item.trim() !== '')), 
count = {};

processInput.forEach((el) =>{
  count[el] = count[el] + 1 || 1;
});

console.log(count);

// https://repl.it/MXcz/4
 
function arithmeticProgression(a,b){
  
let result= [];
   
if (a === undefined && b === undefined ) {
     
   return "No argument passed";
    
} else
 if ((a === undefined && b !== undefined ) || (a !== undefined && b === undefined )) {
 
       return "Enter second argument";
    
} else if (a instanceof Array || b instanceof Array) {
 
       return 'Passed argument must not be an array';
    
} else if (typeof a === 'string' || typeof b === 'string') {
   
     return 'Passed argument must not be a string';
  
} else if (typeof a !== 'number' || typeof a !== 'number') {
  
 return 'Passed argument must be a valid number';
  
} else{
//valid argument
      
  for(let i = a; i<=b; i = i + 3){
  
      result.push(i);
   
   }
     
 return result;
   
 } 

}

arithmeticProgression()

  