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

// 1) funcion contructora
// 2) metodo insert => insertar un sub-arbol
//       tengo un valor?
//          sos menor?
//               recursion ...
//               creo un nuevo arbol
//           sos mayor?
//               recursion ...
//               creo un nuevo arbol
// 3) metodo contains => true or false
//        recorro con recursion
//        sos el valor?
//           recursion
//              derecha...
//           recursion
//              izquierda...
//       retorno false xq no lo encontre
// 4) size => cantidad de nodos (subarboles contando la raiz)
//        contador pero con recursion
// 5) depth-first => recibe dos argumentos (cb, order)
//      in order
//      pre order
//      post order
// 6) recorrido bfs

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
  this.prev = null;  
}

BinarySearchTree.prototype.insert = function(number) {
  if (this.left === null && this.right === null && this.prev === null) {
    let tree = new BinarySearchTree(number);
    return tree;
  }    
}

BinarySearchTree.prototype.size = function() {
  let set = new Set();
  if (!set.has(this.value)) {
    set.add(this.value);
  } else {
    if (this.left === null && this.right === null) {
      return set.size();
    }
  }
  if (this.left.value) {
    set.add(this.left)
  }
}

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
