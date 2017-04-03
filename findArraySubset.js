var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
 
//intersection(firstArray, secondArray); // [2, 1]

//first step delete each array repeat element
function delRep(array){
	var tempArr = [];
	var resArr = [];
	for(var i = 0 ; i<array.length; i++){
		if(tempArr[array[i]]){
			continue;
		}else{
			tempArr[array[i]] = array[i];
			resArr.push(array[i]);
		}
	}
	return resArr;
}

// second compare arrary

function compSection(firstArray,secondArray){
	firstArray = delRep(firstArray);
	secondArray = delRep(secondArray);

	var lenFirst = firstArray.length;
	var lenSecond = secondArray.length;

	var resArr = [];
	
	if(lenFirst<lenSecond){
		for(var i=0;i<lenFirst;i++){
			for(var j=0;j<lenSecond;j++){
				if(firstArray[i] == secondArray[j]){
					resArr.push(firstArray[i]);
				}
			}
		}
		return resArr;
	}else{
		for(var i=0;i<lenSecond;i++){
			for(var j=0;j<lenFirst;j++){
				if( secondArray[i] == firstArray[j]){
					resArr.push(secondArray[i]);
				}
			}
		}
		return resArr;
	}
}


console.log(compSection(firstArray,secondArray));


