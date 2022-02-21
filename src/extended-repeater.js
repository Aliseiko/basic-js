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
/*  function makeStr (string, sep, repeatTimes, mainSep) {
    let result = '';
    for (let i = 1; i <= repeatTimes; i++) {
      result += string;
      if (i != repeatTimes) result += sep;
      if (mainSep && i != repeatTimes) result += mainSep;
    }
    return result;
  }*/
  str = '' + str;
  if (options.addition !== undefined) options.addition = '' + options.addition;
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';

  let additionStr = '';
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (options.addition) additionStr += options.addition;
    if (i != options.additionRepeatTimes) additionStr += options.additionSeparator;
  }
  console.log(additionStr)

  //let add = makeStr(options.addition, options.additionSeparator, options.additionRepeatTimes);

  let result = '';
  for (let i = 1; i <= options.repeatTimes; i++) {
    result += str + additionStr;
    if (i != options.repeatTimes) result += options.separator;
  }
  console.log(options.separator, result)

  //return makeStr(str, add, options.repeatTimes, options.separator)
  return result
}

module.exports = {
  repeater
};
