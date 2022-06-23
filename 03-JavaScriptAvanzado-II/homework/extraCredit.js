//### Repeatify

//Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. 
//Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. 
//La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

//```javascript
//console.log('hola'.repeatify(3));   //holaholahola
//```

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