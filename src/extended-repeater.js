const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let retStr = ''
    let repeatTime = 1;
    let separator = '+'

    let additionSeparator = '|';
    let additionStr = '';
    let additionRepeatTime = 1;
    //get simple repeat time
    if(Number.isInteger(options.repeatTimes) && options.repeatTimes > 0){
      repeatTime = options.repeatTimes;
    }
    //get new separator
    if(typeof options.separator != 'undefined'){
      separator = options.separator;
    }
    //----------------------
    //get add repeator
    if(Number.isInteger(options.additionRepeatTimes) && options.repeatTimes > 0){
      additionRepeatTime = options.additionRepeatTimes;
    }

   
      //get add separator
      if(typeof options.additionSeparator != 'undefined'){
        additionSeparator = String(options.additionSeparator)
      }
  
   //get add string
   if(typeof options.addition != 'undefined'){
       additionStr = ''
       let buff = '';
       for (let index = 0; index < additionRepeatTime; index++) {
        if(index > 0){
          buff = `${additionSeparator}${options.addition}`
        }
        else
          buff = `${options.addition}`
        additionStr = additionStr.concat(buff);
     }

    }

    //get main string
      let buff2 = '';
      
      for (let index = 0; index < repeatTime; index++) {
       if(index > 0){
         buff2 = `${separator}${str}${additionStr}`
       }
       else
         buff2 = `${str}${additionStr}`

       retStr = retStr.concat(buff2);
    }

   return retStr
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));