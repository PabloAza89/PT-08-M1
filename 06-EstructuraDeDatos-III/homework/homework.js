"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(newNum) {
  let node = new BinarySearchTree(newNum);
  if (newNum > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(newNum);
    }
  } else {
    if (newNum < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(newNum);
      }
    }

    
  }
  return 'Successfully inserted';
}

BinarySearchTree.prototype.size = function() {
  let nodeRight = this.right;
  let nodeLeft = this.left;
  let currentVal = this.value;
  let set = new Set();
  if (!nodeRight && !nodeLeft && !set.has(currentVal)) {
    set.add(currentVal)
    return set.size;
  }
  while (nodeRight.right && !set.has(nodeRight.value)) {
    nodeRight = nodeRight.right;
  }
}

let qq = new BinarySearchTree(20)
console.log(qq.size())
console.log(qq)
console.log(qq.insert(15))
console.log(qq.insert(25))
console.log(qq.insert(10))
console.log(qq)


BinarySearchTree.prototype.contains = function() {

}

BinarySearchTree.prototype.depthFirstForEach = function() {

}

BinarySearchTree.prototype.breadthFirstForEach = function() {

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};