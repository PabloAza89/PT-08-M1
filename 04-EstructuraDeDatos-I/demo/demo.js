//Ejemplo 1
//programa para contar para atras hasta 1
function countDown(number) {
  // imprimo el numero
  console.log(number);
  // decrementar el numero
  const newNumber = number - 1;
  // caso base o caso de corte
  if (newNumber > 0) {
    countDown(newNumber); //
  }
}

//countDown(4);

// Ejemplo 2
let parImpar = (numero) => {
  //10
  if (numero < 0) {
    throw new Error('No se admiten numeros negativos');
  } else if (numero === 0) {
    return 'Par';
  } else if (numero === 1) {
    return 'Impar';
  } else {
    return parImpar(numero - 2);
  }
};
console.log(parImpar(2));

// console.log(parImpar(-3)); // error
// console.log(parImpar(20)); // Par
// console.log(parImpar(75)); // Impar
// console.log(parImpar(98)); // Par
// console.log(parImpar(113)); // Impar

/* 
Recursion:
funcion que se llama a si misma => hasta que algo (caso de corte/ base) para la ejecucion y empieza a resolver

4! = 4x3!
  3! = 3x2!
      2! = 2x1!
          1! = 1
*/

//-------------------- SET-------------

let a = new Set();
a.add(7);
a.add(8);
a.add(7);
console.log(a);
a.delete(8);
console.log(a);

let b = [8, 7, 5, 22, 1, 1, 1, 2, 3, 5, 6, 2, 7, 3, 7, 1, { hola: 'hola' }];
[...b] = new Set(b);
console.log(b);

// STACK  => Last in, First Out

function Stack() {
// x detras es un array
}

Stack.prototype.add = function () {
// agrega un elemento al final
};

//----- Extra Homework ----------------
// a) Volver a hacer las funciones de binario a decimal (y viceversa) pero usando recursion
// b) escribe una funcion que reciba un string y lo devuelva dado vuelta ej: Hello => olleH
// c) escribe una funcion que reciba dos strings (una frase/palabra y una letra) y que devuelva la cantidad de veces que se repite esa letra. ej: 'Javascript', 'a' => 2

// Por lo tanto:
// 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0
//   16  +   0   +   4   +   0   + 1 
//             = 21

/* function toDecimal(binary, i = 0) {        
      let n = binary.length;
      if (i == n-1)
          return binary[i] - '0';
  
      return ((binary[i] - '0') << (n-1-i)) + toDecimal(binary, i+1);
  }
  console.log(toDecimal('10101')) */

//BinarioADecimal('10')).toBe(2);
//BinarioADecimal('111')).toBe(7);
//BinarioADecimal('10101')).toBe(21);
//BinarioADecimal('11011')).toBe(27);

// Por lo tanto:
// 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0
//   16  +   0   +   4   +   0   + 1 
//             = 21

function BinarioADecimal(bin, exp = 0) {
let pos = bin.length;
if (exp === pos - 1) {
  return parseInt(bin[exp], 10);
} 
return (parseInt(bin[exp], 10) << (--pos - exp)) + BinarioADecimal(bin, ++exp);
}
console.log(BinarioADecimal('11011'))

// EJERCICIO COMPAÑERO
/* function binaryToDecimal(binary) {
let num = binary;
if (num.length == 1) {
    return num * 2 ** (num.length - 1);
}else{
    return num[0] * 2 ** (num.length - 1) + binaryToDecimal(num.slice(1));
}
}
console.log(binaryToDecimal('11011')); */

// 21/2 = 10 (resto 1)
// 10/2 = 5 (resto 0)
// 5/2 = 2 (resto 1)
// 2/2 = 1 (resto 0)
// 1/2 = 0 (resto 1)
// 21 // 10101


function DecimalABinario(num) {
//parseInt(num, 10);
//return (num / 2 >= 1) ? (num % 2).toString().concat(DecimalABinario(Math.floor(num / 2)).toString()) : 1;
return (num / 2 > 0) ? DecimalABinario(Math.floor(num / 2)).concat((num % 2)) : '';
}

console.log(DecimalABinario(27));

// b) escribe una funcion que reciba un string y lo devuelva dado vuelta ej: Hello => olleH

function reverseString(string, pos = 0) {
let length = string.length;
return (pos < string.length ) ? string[length - 1 - pos].concat(reverseString(string, ++pos)) : '';
}

console.log(reverseString('Hello'))

// EJERCICIO COMPAÑERO
/* function reverse(string) {
if (string.length === 1) {
    return string;
}
return reverse(string.slice(1)) + string[0];
}
console.log(reverse('Hello')) */

// EJERCICIO COMPAÑERO
/* function reverse(string) {
return string.length === 1 ? string : reverse(string.slice(1)) + string[0];
}
console.log(reverse('Hello')) */

//c) escribe una funcion que reciba dos strings (una frase/palabra y una letra) y que devuelva la cantidad de veces que se repite esa letra. ej: 'Javascript', 'a' => 2

function twoStrings(string, letter, res = 0, ind = 0) {
return (ind < string.length) ? (string[ind] === letter) ? twoStrings(string, letter, ++res, ++ind) : twoStrings(string, letter, res, ++ind) : res;
}

console.log(twoStrings('Javascript is great', 'a'))

// EJERCICIO COMPAÑERO
/* function repetir(frase, letra) {
let count = 0;
if (frase.length == 0) {
    return count;
}
if (frase[0] === letra) {
    count++;
}
return count + repetir(frase.slice(1), letra);
} */

// EJERCICIO COMPAÑERO
/* function repetir(frase, letra, count = 0) {
if (frase.length === 0) {
    return count;
}
if (frase[0] === letra) {
  return repetir(frase.slice(1), letra, ++count);
}
return repetir(frase.slice(1), letra, count);
}  */

// EJERCICIO COMPAÑERO
/* function repetir(frase, letra) {
let count = 0;
return (frase.length == 0) ? (frase[0] === letra) ? count++ : count : count + repetir(frase.slice(1), letra);
} */

// EJERCICIO COMPAÑERO
/* function repetir(frase, letra, count = 0) {
return (0 < frase.length) ? (frase[0] === letra) ? repetir(frase.slice(1), letra, ++count) : repetir(frase.slice(1), letra, count) : count;
}
*/

// EJERCICIO COMPAÑERO
/* function repetir(frase, letra) {
let count = 0;
return (0 < frase.length) ? (frase[0] === letra) ? repetir(frase.slice(1), letra) +  ++count : repetir(frase.slice(1), letra) : count;
}
console.log(repetir('Javascripta', 'a')); */

module.exports = {
BinarioADecimal,
DecimalABinario,
reverseString,
twoStrings,
};