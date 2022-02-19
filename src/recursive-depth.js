const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
        let includedArr = [],
            deeps = [];

        function includesArray(array) {
            for (let i = 0; i <= array.length; i++) {
                if (Array.isArray(array[i])) {
                    includedArr.push(array[i]);
                }
            }
            return !!(includedArr.length);
        }

        if (!includesArray(arr)) {
            return 1;
        } else {
            for (let i = 0; i < includedArr.length; i++) {
                deeps.push(1 + this.calculateDepth(includedArr[i]))
            }
            return deeps.sort((a, b) => b - a)[0]
        }
    }
}

module.exports = {
    DepthCalculator
};
