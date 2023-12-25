const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * --discard-next excludes the next element of the array from the transformed array.
  --discard-prev excludes the previous element of the array from the transformed array.
  --double-next duplicates the next element of the array in the transformed array.
  --double-prev duplicates the previous element of the array in the transformed array.
 * 
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error("'arr' parameter must be an instance of the Array!")
  }
  let arrCopy = [...arr];
  let bufArr = [];

  for (let index = 0; index < arr.length; index++) {
  
    const element = arr[index];
    if(element === '--double-next' ){
      if(arrCopy[index + 1] != null){
        arrCopy[index] = arrCopy[index + 1];
      }
    }
    if(element === '--double-prev' ){
      if(arrCopy[index - 1] != null){
        arrCopy[index] = arrCopy[index - 1];
      }
    }
  if(element === '--discard-next'){
    if(index != arrCopy.length - 1){
      delete arrCopy[index + 1]
    }
    else {
      arrCopy.pop()
    }
    
  }
  if(element === '--discard-prev'){
    if(index != 0){
      delete arrCopy[index - 1]
    }
   
  }
    
  }

  arrCopy.forEach((element, index ) => {
    if(element === '--discard-prev' || 
       element === '--discard-next' ||
        element === '--double-next' ||
        element === '--double-prev'
       ){
        delete arrCopy[index]
    }

    })
  //console.log(arrCopy);
  bufArr = arrCopy.filter(element => {
    return element != null
  })
  
  return bufArr
}

module.exports = {
  transform
};
