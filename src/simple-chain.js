const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.chain.push('( )');
        } else {
            this.chain.push(`( ${value} )`);
        }
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' ||
            position !== Math.trunc(position) ||
            !this.chain[position - 1]) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        } else {
            this.chain.splice(position - 1, 1);
        }
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this
    },
    finishChain() {
        let chain = '';
        for (let i = 0; i < this.chain.length; i++) {
            chain += this.chain[i];
            if (i !== this.chain.length - 1){
                chain += '~~'
            }
        }
        this.chain = [];
        return chain
    }
};

module.exports = {
    chainMaker
};
