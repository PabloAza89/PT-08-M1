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
// * Crea un objeto llamado `Shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `Shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. 
//   Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

class Shape {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    getPerimeter() {
        if (this.type === '"Triangle"') {
            return this.a + this.b + this.c;
        }
        if (this.type === '"Circle"') {
            return 2 * Math.PI * this.number;
        }
        if (this.type === '"Square"')  {
            return this.number * 4;
        }
    }
    getArea() {
        if (this.type === '"Triangle"') {
            let s = (this.a + this.b + this.c) / 2;
            let h = (2 / this.a) * Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
            return (this.a * h) / 2;
        }
        if (this.type === '"Circle"') {
            return Math.PI * Math.pow(this.number, 2);
        }
        if (this.type === '"Square"')  {
            return Math.pow(this.number, 2);
        }        
    }
}

class Triangle extends Shape {
    constructor(a,b,c, type = '"Triangle"'){
        super(type);
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

// Probá tu solución con el siguiente código:
var t = new Triangle(1, 2.5, 3);
console.log(t instanceof Triangle)
// true
console.log(Shape.prototype.isPrototypeOf(t));
// true
console.log(t.getPerimeter());
// 6.5
console.log(t.getType());
// "Triangle"
console.log(t.getArea());
// 1.1709371246996996

// * Ahora creá un nuevo constructor que herede de `Shape`, llamado `Circle`. 
//   Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

class Circle extends Shape {
    constructor(number, type = '"Circle"') {
        super(type)
        this.number = number;
    }
}

//Probá tu solución con el siguiente código:
var c = new Circle(2);
console.log(c instanceof Circle);
// true
console.log(Shape.prototype.isPrototypeOf(c));
// true
console.log(c.getPerimeter());
// 12.566370614359172
console.log(c.getType());
// "Circle"
console.log(c.getArea());
// 12.566370614359172

// * Creá una última `Shape` llamada `Square`.
// * Agregá el método `getArea` de todas las `Shape`s.

class Square extends Shape {
    constructor(number, type = '"Square"') {
        super(type)
        this.number = number;
    }
}

//Probá tu solución con el siguiente código:
var s = new Square(3);
console.log(s instanceof Square);
// true
console.log(Shape.prototype.isPrototypeOf(s));
// true
console.log(s.getPerimeter());
// 12
console.log(s.getType());
// "Square"
console.log(s.getArea());
// 9