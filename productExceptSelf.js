var firstArray = [2, 2, 4, 1];// [8, 8, 4, 16]
var secondArray = [0, 0, 0, 2]; // [0, 0, 0, 0]
var thirdArray = [-2, -2, -3, 2];// [12, 12, 8, -12]


function resArray(array){
	var total = 1;
	var finalArray = [];
	for(var i = 0;i<array.length;i++){
		total = total * array[i];
	}
	for(var i = 0; i <array.length;i++){
		if(array[i] == 0){
			finalArray[i] = 0;
		}else{
			finalArray[i] = total/array[i];
		}
	}	
	return finalArray;
}

console.log(resArray(firstArray));
console.log(resArray(secondArray));
console.log(resArray(thirdArray));
