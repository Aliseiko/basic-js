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
function getDNSStats(domains) {
  const countDomains = {},
  reversedDomains = [];

  domains.forEach(el => {
    reversedDomains.push(el.split('.').reverse());
  })

  reversedDomains.forEach(el => {
    let dns = '';
    for (let i = 0; i < el.length; i++) {
      dns += '.' + el[i];
      if (countDomains[dns]) {
        countDomains[dns] += 1;
      } else {
        countDomains[dns] = 1;
      }
    }
  })

  return countDomains;
}

module.exports = {
  getDNSStats
};
