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
}


BinarySearchTree.prototype.contains = function(toSearch) {
  if (toSearch === this.value) return true;
  if (toSearch > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(toSearch);  
    }
  } else {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(toSearch);
    }    
  }
}

// DFS -> DEPTH FIRST SEARCH - PRE-ORDER  ->  node > left > right
// DFS -> DEPTH FIRST SEARCH - POST-ORDER ->  left > right > node
// DFS -> DEPTH FIRST SEARCH - IN-ORDER   ->  left > node > right
// BFS -> BREADTH FIRST SEARCH            ->  all left + right (by levels)


BinarySearchTree.prototype.depthFirstForEach = function(cb, recorrido) {
	if (recorrido === "pre-order") {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido)
    }    
    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido)
    }
  } else if (recorrido === "post-order") {
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido);
    }
    cb(this.value)
  } else {
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido);
    }
    cb(this.value)
    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido);
    }        
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array) {
  if (!array) {
    var array = [];
  }

  if (this.left) {
    array.push(this.left)
  }
  if (this.right) {
    array.push(this.right)
  }
  cb(this.value)
  if (array.length > 0) {
    return array.shift().breadthFirstForEach(cb, array);
  }
}

BinarySearchTree.prototype.size = function() {
  if (!this.left && !this.right) return 1;
  else if (this.left && this.right) return 1 + this.left.size() + this.right.size();
  else if (this.left && !this.rigth) return 1 + this.left.size();
  else if (this.right && !this.left) return 1 + this.right.size();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};