const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = Array.from(n.toString())
  let max = 0;
  for (let index = 0; index < digits.length; index++) {
    let buff = [...digits];
    buff.splice(index, 1);
    let check = Number.parseInt(buff.join(''));
    max = Math.max(max, check);
   
    
  }
  return max
}

module.exports = {
  deleteDigit
};


//console.log(deleteDigit(152));