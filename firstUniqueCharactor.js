/*
Question: 

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */


var firstUniqChar = function(s) {
	var tempObject = {};
	var len = s.length; //string length
	if(s === ''){return -1}
	if(len === 1){return 0}
	for (var i =0; i<len ; i++){
		if(tempObject[s[i]]){
			tempObject[s[i]] = 'more than one time';
		}else{
			tempObject[s[i]] = 'one time';
		}
	}

	for (var j=0;j<len;j++){
		if (tempObject[s[j]] =='one time'){
			return j
		}
	}

	return -1

}