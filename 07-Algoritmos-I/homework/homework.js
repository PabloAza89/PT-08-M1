'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // let number = num;
  // let array = [1];
  // let i = 2
  // do {
  //   if (number % i === 0) {
  //    array.push(i)
  //    number = number / i
  //   } else {
  //    i++
  //   }
  // } while (number >= i)
       
  // return array;
  
  let array = [1];
  let i = 2
  do {
    if (num % i === 0) {
     array.push(i)
     num = num / i
    } else {
     i++
    }
  } while (num >= i)
       
  return array;
}
console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // return array.sort(function(a,b) {
  //   return a - b;
  // })
  // [10, -2, -7, 4] => [-7, -2, 4, 10]
  // [-2, -7, 4, 10]

  // [5, 1, 4, 2, 8] => [1, 2, 4, 5, 8]
  // [5, 1, 4, 2, 8]
  // [1, 4, 2, 5, 8]

  for (let j = 0 ; j < array.length ; j++) {
    for (let i = 0 ; i < array.length ; i++) {
      if (array[i] > array[i + 1]) {
        let toMove = array[i]
        array.splice(i, 1);
        array.splice(i + 1, 0, toMove);
      }
    }
  }
  
  return array;

}

//console.log(bubbleSort([5, 1, 4, 2, 8]))
//console.log(bubbleSort([11, 0, 3, 1, 7, 12, 4, 6, 24, 2, 8, 5, 9]))

  // [5, 1, 4, 2, 8] => [1, 2, 4, 5, 8]
  // [5, 1, 4, 2, 8]
  // [1, 4, 2, 5, 8]

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i + 1] < array[i]) { // i = 0
      let toMove = array[i + 1]
      array.splice(i + 1, 1)
      //console.log(i) // 0
      //console.log(toMove) // 1
      //console.log(array) // [5, 4, 2, 8]
      for (let j = i; j >= 0 ; j--) {
        //console.log(array[j-1])
        if (toMove < array[j] && array[j -1] === undefined || toMove < array[j] && array[j - 1] < toMove)  {
          array.splice(j, 0, toMove)
        }
      }
    }
  }
  return array;
}

console.log(insertionSort([5, 1, 4, 2, 8]))
//                        [5, 4, 2, 8]    // i = 0
//                        [1, 5, 4, 2, 8] // i = 0
//                        [1, 5, 2, 8]    // i = 1
//                        [1, 4, 5, 2, 8] // i = 1
//                        [1, 4, 5, 2, 8] // i = 1
//

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let firstValueToSwap = array[0];
  let firstIndexToSwap;
  let secondValueToSwap = array[1];
  let secondIndexToSwap;
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] > array[i + 1]) {
      firstValueToSwap = array[i];
      firstIndexToSwap = i;
      secondValueToSwap = array[i + 1];
      secondIndexToSwap = i + 1;
      for (let j = i + 1; j < array.length ; j++) {
        if (secondValueToSwap > array[j]) {
          secondValueToSwap = array[j]
          secondIndexToSwap = j;
        } 
        //console.log(target)
      }
    }
    console.log(firstIndexToSwap)
    console.log(firstValueToSwap)
    console.log(secondIndexToSwap)
    console.log(secondValueToSwap)
    
    array.splice(firstIndexToSwap, 1, secondValueToSwap)
    array.splice(secondIndexToSwap, 1, firstValueToSwap)
    //array.splice(secondTargetIndex)
  }
  return array
}

console.log(selectionSort([10, 10, 16, 12]))
//                        [5, 1, 4, 2, 8]    // target = 1
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
