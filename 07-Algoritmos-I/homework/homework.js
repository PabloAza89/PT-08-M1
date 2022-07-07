'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let number = num;
  let array = [1];
  let i = 2
  do {
    if (number % i === 0) {
     array.push(i)
     number = number / i
    } else {
     i++
    }
  } while (number >= i)
       
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

console.log(bubbleSort([5, 1, 4, 2, 8]))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
