const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains) {
  let retStat = {};
  domains.forEach(element =>{
    let bufArr = element.split('.').reverse();
    //add into object
    let domain = '.'.concat(bufArr.join('.'));
    counter(domain); //add and count domain from array into object
    
    for (let i = bufArr.length - 1; i > 0; i--) {
      bufArr.splice(i, 1);
      domain  = '.'.concat(bufArr.join('.'))
      counter(domain);
    }
  });

  function counter(domain){
    if(!(domain in retStat)){
      retStat[`${domain}`] = 1;
    }
    else
      retStat[`${domain}`] = retStat[`${domain}`] + 1;
  }

  return retStat
}

module.exports = {
  getDNSStats
};



//  domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
//    ]

//    console.log(getDNSStats(domains));