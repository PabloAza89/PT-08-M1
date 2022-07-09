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