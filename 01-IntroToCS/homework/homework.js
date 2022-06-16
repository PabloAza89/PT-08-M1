'use strict'

function BinarioADecimal(num) {
  let split = num.split('').reverse();
  let sum = 0;
  for (let i = 0 ; i < split.length ; i++) {
    sum += (parseInt(split[i], 10) * Math.pow(2, i));
  }
  return sum;
  //let qwe = parseInt(num, 2);
  //return qwe;
  
}
//console.log(BinarioADecimal('1010'))

function DecimalABinario(num) {
  let binary = [];
  let result = num;
    while (result !== 0) {
      binary.unshift(result % 2);
      result = Math.floor(result / 2);
    }

  /*  do {
      binary.unshift(result % 2);
      result = Math.floor(result / 2);
    } while (result !== 0);*/
  return binary.join('');
  //let asd = num.toString(2);
  //return asd;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}