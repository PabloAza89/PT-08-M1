// ## Extra Credit

// Si terminaste, podes intentar implementar estas estructuras. Son super díficiles, y probablemente no tengas tiempo! No te preocupes, casi nadie llega hasta acá.

// ### Árbol binario

// * Una función que balancee el árbol binario.

// ----

// #### God Mode: Arbol AVL

// Implementar un árbol AVL que realice las sigiuentes operaciones:

// * Insertar un elemento.
// * Borrar un elemento.
// * Buscar un elemento.
// * Que tenga una función que devuelve true si el árbol está balanceado.

function BinaryAVL(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  BinaryAVL.prototype.insert = function(newNum) {
  let node = new BinaryAVL(newNum);
  if (newNum > this.value) {
    if (newNum > this.right && !this.left) {
      this.left = this.right;
      this.right = node
    } else {
      return this.right.insert()
    }
  } else {
    if (newNum < this.right && !this.right) {
      this.rigth = this.left;
      this.left = node
    } else {
      return this.left.insert()
    }
  }
}

module.exports = {
  BinaryAVL,
};