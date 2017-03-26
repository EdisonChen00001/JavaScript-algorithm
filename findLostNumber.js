//In literate array , find which number you lost

//[2, 5, 1, 4, 9, 6, 3, 7]; upper_bound = 9; lower_bound = 1; // The output of the function should be 8

var testArrary = [2, 5, 1, 4, 9, 6, 3, 7]

var length = testArrary.length;

console.log(arrTest(testArrary));

function sortArray(a,b){
	return a-b;
}


function arrTest(array){
	var newArrary = array.sort(sortArray);

	var lower_bound = newArrary[0];

	for(var i=0;i<length;i++){
		if(newArrary[i] != (lower_bound+i)){
			return (lower_bound+i);
		}
	}
}

