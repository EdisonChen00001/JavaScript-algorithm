/*Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */

//Python 
//
   // class Solution(object):
   //      def reverseString(self, s):
   //          """
   //          :type s: str
   //          :rtype: str
   //          """
   //          return s[::-1]

//
var reverseString = function(s) {
    var arr = [];
    for (var i =s.length-1; i>=0;i--){
        arr.push(s[i]);
    }
    arr = arr.join('');
    arr = arr.toString();
    return arr;
};