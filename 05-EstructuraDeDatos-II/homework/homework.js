"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.next = null;
  this.value = value;
}

LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let current = this.head;
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
}

LinkedList.prototype.remove = function() { 
  let current = this.head; 
  let removed;
  if (!current) return null;
  
  if (!current.next) {
    removed = current.value;
    this.head = null;        
  } else {
    while (current.next.next) {
      current = current.next;
    }
    removed = current.next.value
    current.next = null;
  } 
  this._length--
  return removed;
}

// - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
//   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
//   Ejemplo: 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.

LinkedList.prototype.search = function(data) {
  let current = this.head;
  
  while (current !== null) {
    if (typeof data !== 'function') {
      if (data === current.value) {
        return data;                  
      } 
    } else {
        if (data(current.value)) {
          return current.value;
        }
      };
    current = current.next;
  }
  return null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(bucket) {
  this.bucket = [];
  this.numBuckets = 35;
}

// - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.

HashTable.prototype.hash = function(string) {
  let suma = 0;
  for (let i = 0 ; i < string.length ; i++) {
    suma += string.charCodeAt(i);
  }
  return suma % this.numBuckets;
}

// - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.

HashTable.prototype.set = function(clave, valor) {
  if (typeof clave !== 'string') throw new TypeError('Keys must be strings')
  let hash = this.hash(clave);
  if (this.bucket[hash] === undefined) {
    this.bucket[hash] = {};
  }
  this.bucket[hash][clave] = valor;
}

// - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

HashTable.prototype.get = function(clave) {
  let hash = this.hash(clave);
  return this.bucket[hash][clave];
}
// - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

HashTable.prototype.hasKey = function(clave) {
  let hash = this.hash(clave);
  return this.bucket[hash].hasOwnProperty(clave);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
