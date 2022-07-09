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
    if (array[i] === pointer) {
      equal.push(array[i])           
    }
    if (array[i] > pointer) {
      right.push(array[i])           
    } 
    // console.log(left)
    // console.log(equal)
    // console.log(right)
    // console.log(pointer)
  }
   if (left.lenght === 1 || left[0] === undefined) right.quickSort(array = right)
   if (right.lenght === 1 || right[0] === undefined) left.quickSort(array = left)
   if ((left.lenght === 1 || left[0] === undefined) && (right.lenght === 1 || right[0] === undefined)) left.concat(equal).concat(right)

   
  


  //console.log(pointer)

  //return Math.floor((Math.random() * array.length) * 1)        
}

console.log(quickSort([5, 1, 4, 2, 8]))
//console.log(quickSort([5, 1, 4]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
