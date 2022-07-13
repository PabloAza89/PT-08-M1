const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')



// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    counter = 0;

    for (let i = 0 ; i < array.length ; i++) {
        if (!Array.isArray(array[i])) {
            counter += array[i];
        } else {
            counter += countArray(array[i])
        }
    }
    return counter;        
}

// [1,1,1,1,1,1,1,1,1,1] >>> (10)
// [1, [2, [3,4]], [5,6], 7] >>> (28)
// [1, [2, [3,[4,4,4]]], [5,6], 7] >>> (36)

// console.log(countArray([1,1,1,1,1,1,1,1,1,1]))
// console.log(countArray([1, [2, [3,4]], [5,6], 7]))
// console.log(countArray([1, [2, [3,[4,4,4]]], [5,6], 7]))

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

//// HELPER ////

const objeto = {
    a: {
        a1: 10,
        a2: 'Franco',
        a3: {f: 'r', a: 'n', c: {o: true}}
    },
    b: 2,
    c: [1, {a: 1}, 'Franco']
    }

//// HELPER ////   

var countProps = function(obj) {
    var counter = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            counter = ++counter + countProps(obj[key])
        } else {
            ++counter
        }
        
    }
    return counter
}

console.log(countProps(objeto));

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1


// search('2') .toBe('2') **
// search(3) .toBe(3) **
// search(false) .toBe(false) **

// search('Franco') .toBe(null)
// search('uno') .toBe(null)
// search('cuatro') .toBe(null)
// search('cinco') .toBe(null)

// search('Kiricocho') .toBe('Kiricocho')
// search('Kiricocho') .toBe('Kiricocho')

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
    
    let counter = 0;
    let current = this.head;

    if (current === null) return 0;

    ///////////////////////////

    if (current.next === null) {
        if (Number.isInteger(Math.floor(parseInt(current.value, 10) / 2)) || current.value === false || current.value === true) {
            return 0;
        } else {
            current = null;
            return 1;
        }
    }
    
    ///////////////////////////
    
    while (current.next !== null) {
        if (Number.isInteger(Math.floor(parseInt(current.value, 10) / 2)) || current.value === false || current.value === true) {
            current = current.next
        } else {
            current.value = 'Kiricocho';
            current = current.next            
            ++counter;
        }
    }

    if (current.next === null) {
        if (Number.isInteger(Math.floor(parseInt(current.value, 10) / 2)) || current.value === false || current.value === true) {
            return counter;
        } else {
            current.value = 'Kiricocho';
            ++counter
            return counter;
        }
    }

    return counter;
}

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

//   [1, 3, 5, 7, 9]    [2, 4, 6]
//     [1, 2, 3, 4, 5, 6, 7, 9]

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newQueue = new Queue(mergeQueues);
    // newQueue.enqueue(1);
    // newQueue.enqueue(2);
    // newQueue.enqueue(3);
    // newQueue.enqueue(4);
    // newQueue.enqueue(5);
    // newQueue.enqueue(6);
    // newQueue.enqueue(7);
    // newQueue.enqueue(9);
    
    while (queueOne.size() > 0) {
        newQueue.enqueue(queueOne.dequeue());
        if (queueTwo.size() > 0) {
            newQueue.enqueue(queueTwo.dequeue());
        }
    }

    return newQueue;
}

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:

}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:

}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}