function Node(data) {
    this.data = data;
    this.next = null;
  }
  ​
  function List() {
    this._length = 0;
    this.head = null;
  }
  ​
  let miLista = new List();
  //  head: {data: 'Jime', next: nodo1}
  //    nodo1: {data: 'Luna', next: nodo2}
  //      nodo2:  {data: 'Sebas', next:nodo3}
  //        nodo3:  {data: 'Jere', next: null}
  ​
  List.prototype.add = function (elemento) {
    let nodo = new Node(elemento); //  {data: 'Jere', next: null}
    let current = this.head;
    // si la lista esta vacia
    if (!current) {
      // current === null
      this.head = nodo; // head: {data: 'Jime', next: null}
      this._length++; // 1
      return nodo; // 'se agrego correctamente'
    }
    // recorrer hasta llegar al ultimo
    while (current.next) {
      current = current.next;
    }
    current.next = nodo;
    this._length++;
    return nodo;
  };
  ​
  /* 
  ​
  dos clases => nodo recibe un valor y tiene un .next en null x defecto
             => lista .head en null x defecto, _length ("privada")
             metodos en mi clase Lista
                 manipular a los nodos
    Lista.add(valor) { logica para agregar un nodo
        creo una variable y le guardo una nueva instancia de nodo => var vagon= new nodo(7) vagon= {data:7, next:null}
        creo a mi puntero que me ayuda a recorrer el tren
        let current = this.head
        pregunto es tengo un current 
        this.head === null => this.head = vagon
        return para cortar la ejecucion
        si tengo un head con un vagon asociado
          entonces entro al while => recorrer el tren hasta llegar al ultimo vagon
          current.next => referencia al proximo nodo => vagon
  ​
  }             
  ​
  ​
  */
  ​
  List.prototype.getAll = function () {
    current = this.head; //empezamos en la cabeza
    if (!current) {
      console.log('La lista esta vacia!');
      return;
    }
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    return;
  };
  miLista.add('Jime');
  miLista.add('Luna');
  miLista.getAll();