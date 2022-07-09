// function NumToZero(num) {
//   if (num < 2) {
//     return;
//   } 
//     console.log(num);
//     return NumToZero(num - 1)
  
// }

// console.log(NumToZero(9))

//////////////////////////////////////////////////////////

function cuentaAtras(numero, array = []) {
    //base case
    
    if (numero > 20) {
        return array;
    } else {

        //console.log(numero);
        array.push(numero)
        return cuentaAtras(numero + 1, array);
    }
};

console.log(cuentaAtras(10))

//////////////////////////////////////////////////////////

// Escribe un programa que invierta una cadena usando recursión.
// Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".

function reverseString(string, reversed = []) {
    if (string.length === 0) {
        return reversed.join('');
    } else {
        reversed.unshift(string[0])
        return reverseString(string.slice(1), reversed)
    }
}

console.log(reverseString('freeCodeCamp'))

//////////////////////////////////////////////////////////

// Escribe un programa que devuelva el número de veces que aparece una letra en una cadena.
// Tu programa debería recibir una cadena y la letra.
// let programa = (cadena, letra) => {...}
// Después, debe devolver el número de veces que la letra aparece en la cadena. 
// Dado el texto "JavaScript" y la letra  "a", su programa debe devolver 2.‌‌‌‌

function numOfVowels(string, letter, counter = 0) {
    if (string.length === 0) {
        return counter
    } else {
        if (string[0] === letter) {
            ++counter
            return numOfVowels(string.slice(1), letter, counter)
        } else {
            return numOfVowels(string.slice(1), letter, counter)
        }
    }
}

console.log(numOfVowels('JavaScript', 'a'));