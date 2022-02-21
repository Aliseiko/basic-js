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
  const digitStr = n.toString(),
      digitsArr = [];
  for (let i = 0; i < digitStr.length; i++) {
    let arr = digitStr.split('');
    arr.splice(i, 1);
    digitsArr.push(+arr.join(''));
  }

  return digitsArr.sort((a, b) => b-a)[0]
}

module.exports = {
  deleteDigit
};
