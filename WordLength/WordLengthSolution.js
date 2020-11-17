function wordLength(arr) {
//code goes here
var map = new Map();
   for(var i = 0; i < arr.length; i++){
      var items = arr[i].toLowerCase();
      map.set(items,items.length);
   }
   return map;
}

module.exports = wordLength;