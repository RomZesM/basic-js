const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let counter = 0;
    let arr = Array.from(s2);
    console.log(arr);
    for (let i = 0; i < s1.length; i++) {
      const element1 = s1[i];
      for (let j = 0; j < arr.length; j++) {
        const element2 = arr[j];
        if(element1 === element2){
          counter++;
          arr[j] = 0;
          break
        }
          
      }
    }
    return counter;
}

module.exports = {
  getCommonCharacterCount
};

// let s1 = 'zzzz'
// let s2 = 'zzzzzzz'
// console.log(getCommonCharacterCount(s1, s2));