'use strict'
// No cambies los nombres de las funciones.

// [5, 1, 4, 2, 8] => [1, 2, 4, 5, 8]
// [10, 10, 16, 12] => [10, 10, 12, 16]
// [10, -2, -7, 4] => [-7, -2, 4, 10]

function quickSort(array, left = [], equal = [], right = []) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8] => [1, 2, 4, 5, 8]
  
  let pointer = array[Math.floor((Math.random() * array.length) * 1)];

  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] < pointer) {
      left.push(array[i])           
    }
    else if (array[i] > pointer) {
      right.push(array[i])           
    }
    else {
      equal.push(array[i])
    }
  }
  
  if (left.length > 1) return quickSort(left).concat(equal).concat(right)
  if (right.length > 1) return left.concat(equal).concat(quickSort(right))
  return left.concat(equal).concat(right);
}

//console.log(quickSort([5, 1, 4, 2, 8]))
//console.log(quickSort([5, 1, 4]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
  if (array.length === 1) return array;

  let pointer = Math.floor((array.length - 1) / 2);
  let left = [];
  let right = [];  

  for (let i = 0 ; i < array.length ; i++) {
    if (i <= pointer) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  function merge(left, right) {
    let result = []
    let i = 0;
    let j = 0;
    while (i < left.length || j < right.length) {
      if (left[i] < right[j] || right[j] === undefined) {
        result.push(left[i])
        i++      
      } 
      else {
        result.push(right[j])
        j++
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
  }

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([9, 2, 4, 5, 1, 8]))
//console.log(mergeSort([8, 1]))

// function prueba() {
//   //let pointer = Math.floor((array.length - 1) / 2);
//   let left = [2, 4, 9];
//   let right = [1, 5, 8];
//   let result = [];
  
//   let i = 0;
//   let j = 0;
 
//   while (i < left.length || j < right.length) {
//     if (left[i] < right[j] || right[j] === undefined) {
//       result.push(left[i])
//       i++      
//     } 
//     else {
//       result.push(right[j])
//       j++
//     }
//   }
//   return result
// }

// console.log(prueba());

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
