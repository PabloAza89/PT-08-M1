function LinkedList() {
  this.head = null;
}

function Node(valor){
    this.value = valor;
    this.next = null;
}

LinkedList.prototype.add = function(valor) {
  var nuevoNodo = new Node(valor);

  if(!this.head){
    this.head = nuevoNodo;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
  }
}

LinkedList.prototype.remove = function() {
  if(!this.head){
    return undefined;
  }

  if(this.head.next === null){
    var unicoNodo = this.head;
    this.head = null;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  return nodoActual.value;
}

LinkedList.prototype.search = function(arg) {
  var nodoActual = this.head;

  if(nodoActual === null){
    return null;
  }

  while (nodoActual !== null) {
    if(typeof arg === "function"){
      if(arg(nodoActual.value)){
        return nodoActual.value;
      }
    } else if(nodoActual.value === arg){
        return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
}

// simplifyList: metodo que filtra elemento repetidos de nuestra LinkedList y crear una nueva lista con los
// elemento extraidos
// Si está vacía: return false;
// Ejemplo: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
//          Head --> [2] --> [5] --> [1] --> [7] --> null
// Aclaración: se debe reemplazar la lista original por la nueva;

var newList = new LinkedList();
newList.add(2)
newList.add(5)
newList.add(1)
newList.add(5)
newList.add(7)
newList.add(2)










console.log(newList)

LinkedList.prototype.simplifyList = function() {

}

