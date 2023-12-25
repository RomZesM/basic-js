const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    
    let depth = 1;
    
    if(arr.length > 0){
      
      arr.forEach((element)=> {
      if(Array.isArray(element)){
        let depth2 = this.calculateDepth(element) + 1;
        depth = Math.max(depth, depth2)
      }
    });
    }
    
    return depth;
  }
}

module.exports = {
  DepthCalculator
};


const depthCalc = new DepthCalculator();
//console.log(depthCalc.calculateDepth([8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]]));
//console.log(Array.isArray([[]]), [[]].length);
//console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]) );
//console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]) );