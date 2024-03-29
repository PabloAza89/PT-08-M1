'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  let number = n - 1
  if (number > 1) {
      return nFactorial(number) * n;
  }
  return n;
}

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

// EJERCICIO ADICIONAL
// function nFactorial(n) {
//   let res = n;
//   while (n > 1) {
//     res *= n - 1;
//     --n;
//   }
//   return res;
// }

// expect(0).toBe(0);
// expect(2).toBe(1);
// expect(6).toBe(8);
// expect(9).toBe(34);
// 
// length = 1  2  3  4  5  6
// fibo   = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// n      = 0  1  2  3  4  5  6  7   8   9

// function nFibonacci(n) {
//   let arr = [0, 1];
//   if (n === 0) {return arr[0]};
//   if (n === 1) {return arr[1]};
//   let number = nFibonacci(n - 1) + nFibonacci(n - 2)
//   if (number > 0) {
//     return number;
//   }
//   return nFibonacci(n)
// }

function nFibonacci(n) {
  let arr = [0, 1];
  if (n < 0) return 'El numero no puede ser negativo';
  if ((n < 2 && n > -1 ) || n === undefined) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2)
}

console.log(nFibonacci())

// length = 1  2  3  4  5  6  7  8
// fibo   = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// n      = 0  1  2  3  4  5  6  7   8   9

// EJERCICIO ADICIONAL
// function nFibonacci(n) {
//   let array = [0, 1];
//   if (n === 0) {return array[0]};
//   if (n === 1) {return array[1]};
//   while (n > array.length - 1) {
//     array.push(array[array.length - 1] + array[array.length - 2]);
//   }
//   return array[array.length - 1];
// }

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// FUNCTION CONSTRUCTOR
// function Queue() {
//   this.array = [];
// }

// Queue.prototype.enqueue = function (value) {
//   this.array.push(value);
// }

// Queue.prototype.dequeue = function () {
//   if (this.array.length === 0) {return undefined};
//   return this.array.shift();
// }

// Queue.prototype.size = function (value) {
//   return this.array.length;
// }

// CLASS // EJEMPLO PROFESOR
class Queue {
	constructor() {
		this.array = [];
	}
	enqueue(elemento){
	  this.array.push(elemento);
	}
	dequeue(){
	  return this.array.shift();
	}
	size(){
	  return this.array.length;
	}
}

var qq = new Queue;

console.log(qq.enqueue(5))
console.log(qq.enqueue(2))
console.log(qq.enqueue(2))
console.log(qq.size())



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
