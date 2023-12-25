const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 // console.log(typeof date.getTime);
  if (typeof date === 'undefined'){

     return 'Unable to determine the time of year!';
  }
   
  if (Object.prototype.toString.call(date) != '[object Date]' || date[Object.getOwnPropertySymbols(date)[0]] === 'Date') {
    throw new Error('Invalid date!')
  }

  const month = date.getMonth();
  
  if (month === 11 || month === 0 || month === 1)
    return 'winter'
  if (month === 2 || month === 3 || month === 4)
    return 'spring'
  if (month === 5 || month === 6 || month === 7)
    return 'summer'
  if (month === 8 || month === 9 || month === 10)
    return 'autumn'
}


module.exports = {
  getSeason
};

let d = new Date(2020, 13, 31);
let f = new Date('July 20, 69 00:20:18');
// console.log(getSeason(d));

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

// console.log(getSeason(deeperFakeDate));
 //console.log(getSeason(fakeDate));



// console.log(fakeDate[Object.getOwnPropertySymbols(fakeDate)[0]]) 
// console.log(d[Object.getOwnPropertySymbols(d)[0]]) 
