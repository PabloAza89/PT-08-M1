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
// c) escribe una funcion que reciba dos strings (una frase/palabra y una letra) y que devuelva
// la cantidad de veces que se repite esa letra. ej: 'Javascript', 'a' => 2

//BinarioADecimal('10')).toBe(2);
//BinarioADecimal('111')).toBe(7);
//BinarioADecimal('10101')).toBe(21);

//  1  |  0  |  1  |  0  |  1
// --- | --- | --- | --- | ---
// 2^4 | 2^3 | 2^2 | 2^1 | 2^0

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

/* function toDecimal(binary, i = 0) {        
        let n = binary.length;
        if (i === n - 1)
            return binary[i] - '0';
    
        return ((binary[i] - '0') << (--n - i)) + toDecimal(binary, ++i);
    }
    console.log(toDecimal('10101')) */

function BinarioADecimal(bin, exp = 0) {
  let pos = bin.length;
  if (exp === pos - 1) {
    return parseInt(bin[exp], 10);
  } 
  return (parseInt(bin[exp], 10) << (--pos - exp)) + BinarioADecimal(bin, ++exp);
}

//BinarioADecimal('10')).toBe(2);
//BinarioADecimal('111')).toBe(7);
//BinarioADecimal('10101')).toBe(21);
//BinarioADecimal('11011')).toBe(27);

// Por lo tanto:
// 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0
//   16  +   0   +   4   +   0   + 1 
//             = 21

// 21/2 = 10 (resto 1)
// 10/2 = 5 (resto 0)
// 5/2 = 2 (resto 1)
// 2/2 = 1 (resto 0)
// 1/2 = 0 (resto 1)
// 21 // 10101
console.log('asd')
function DecimalABinario(num) {
  parseInt(num, 10);
  return (Math.floor(num) / 2 >= 1) ? (Math.floor(num) % 2).toString().concat(DecimalABinario(Math.floor(num / 2)).toString()) : 0;
}

console.log(DecimalABinario(21));


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};