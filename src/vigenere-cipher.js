const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machineIsDirect = true) {
    this.machineIsDirect = machineIsDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let result = '',
        messageUp = message.toUpperCase(),
        resultKey, encriptKey = '';
    let count = 0;

    for (let i = 0; i < messageUp.length; i++) {

      if (messageUp.charCodeAt(i) >= 65 && messageUp.charCodeAt(i) <= 90) {
        encriptKey += key[count % key.length].toUpperCase();
        count++;
      } else {
        encriptKey += ' ';
      }
    }

    for (let i = 0; i < messageUp.length; i++) {
      if (messageUp.charCodeAt(i) >= 65 && messageUp.charCodeAt(i) <= 90) {
        resultKey = String.fromCharCode(((messageUp.charCodeAt(i) - 65) + (encriptKey.charCodeAt(i) - 65)) % 26 + 65);
        result += resultKey;
      } else {
        result += message[i];
      }
    }

    let reversedResult = result.split('').reverse().join('')

    return (this.machineIsDirect) ? result : reversedResult
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let result = '',
        encryptedMessageUp = encryptedMessage.toUpperCase(),
        resultKey, encriptKey = '';
    let count = 0;
    for (let i = 0; i < encryptedMessageUp.length; i++) {
      if (encryptedMessageUp.charCodeAt(i) >= 65 && encryptedMessageUp.charCodeAt(i) <= 90) {
        encriptKey += key[count % key.length].toUpperCase();
        count++;
      } else {
        encriptKey += ' ';
      }
      console.log(encriptKey)
    }

    for (let i = 0; i < encryptedMessageUp.length; i++) {
      if (encryptedMessageUp.charCodeAt(i) >= 65 && encryptedMessageUp.charCodeAt(i) <= 90) {
        resultKey = String.fromCharCode(((encryptedMessageUp.charCodeAt(i) - 65) - (encriptKey.charCodeAt(i) - 65) + 26) % 26 + 65);
        result += resultKey;
      } else {
        result += encryptedMessage[i];
      }
    }

    let reversedResult = result.split('').reverse().join('')

    return (this.machineIsDirect) ? result : reversedResult

  }
}

module.exports = {
  VigenereCipheringMachine
};
