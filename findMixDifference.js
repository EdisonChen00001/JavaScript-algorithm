var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
var len = array.length;
var minNum = -1000000;
var dif = 0;
console.log(testArray(array)); // 11 (15 - 4)
function testArray(arr) {

	for (var i=1;i<len;i++){
		for (var j=0; j<i;j++){
			dif = arr[i]-arr[j];
			if (dif > minNum){
				minNum = dif;
			}
		}
	}

	return minNum;
}

