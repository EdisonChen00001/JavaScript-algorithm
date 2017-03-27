//  var test = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];


// len = test.length;
// console.log(removeRep(test));

//  function removeRep(arr){
//  	var temp = {};
//  	var result = [];
//  	for (var i=0;i<len;i++){
//  		if(temp[arr[i]] == null){
//  			temp[arr[i]]=arr[i];
//  		}
//  	} 	
//  }

// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
 
Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
 
 
// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
 
uniqueArray(array); // [1, 2, 3, 5, 9, 8]
 
function uniqueArray(array) {
  var hashmap = {};
  var unique = [];
  for(var i = 0; i < array.length; i++) {
    // If key returns null (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty([array[i]])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }
  return unique;
}

