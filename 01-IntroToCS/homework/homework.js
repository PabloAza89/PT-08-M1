'use strict'

function BinarioADecimal(num) {
  let split = num.split('').reverse();
  let j = 0;
  let sum = 0;
  for (let i = 0 ; i < split.length ; i++) {
    sum += (parseInt(split[i], 10) * Math.pow(2, j));
    j++;
  }
  return sum;
}

function DecimalABinario(num) {
  let binary = [];
    let result = num;
    do {
        binary.unshift(result % 2);
        result = Math.floor(result / 2);
        
    } while (result !== 0);
    return binary.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}