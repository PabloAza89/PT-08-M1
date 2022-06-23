// ### Repeatify
//
// Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. 
// Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. 
// La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).
//
// console.log('hola'.repeatify(3));   //holaholahola

String.prototype.repeatify = function(number) {
    let string = '';
    if (number > 0) {
        for (let i = 0 ; i < number ; i++) {
            string += this;
        }
        return string;
    } 
    return "''";
}

console.log('hola'.repeatify(3));

// ### Shapes
//
// * Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. 
//   Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

let shape = {
    type: 'Triangle',
    getType: function() {
        return this.type;
    }
}

function Triangle(a,b,c) {
    a = a;
    b = b;
    c = c;
}

Triangle.prototype.shape = function() {}

// Probá tu solución con el siguiente código:
var t = new Triangle(1, 2, 3);
console.log(t instanceof Triangle)
// true
console.log(shape.prototype.isPrototypeOf(t));
// true
console.log(t.getPerimeter());
// 6
console.log(t.getType());
// "Triangle"