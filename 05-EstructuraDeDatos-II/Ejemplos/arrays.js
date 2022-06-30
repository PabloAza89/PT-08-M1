'use strict'

/* ARRAYS FUNCTIONS */

// MENOR

function minimo(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]<aux) aux = arr[i];
  }
  console.log('El minimo es: ', aux);
  return aux;
}

console.log(minimo([1,2,3,4,5]))

// MAYOR

function mayor(arr) {
  var aux = arr[0];
  for (var i=1; i<arr.length; i++) {
    if (arr[i]>aux) aux = arr[i];
  }
  console.log('El mayor es: ',aux);
  return aux;
}

console.log(mayor([1,2,3,4,5]))

// TOTAL

function total(arr) {
  var aux = arr.reduce(function(tot,val){
    return tot+val;
  })
  console.log('El total es: ', aux);
  return aux;
}

console.log(total([1,2,3,4,5]))

function totalBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El total es: ', aux);
  return aux;
}

console.log(totalBis([1,2,3,4,5]))

// PROMEDIO

function promedio(arr) {
  var len = arr.length,
    aux = arr.reduce(function(tot,num) {
      return tot+num;
    })
  console.log('El promedio es: ',aux/len);
  return aux/len;
}

console.log(promedio([1,2,3,4,5]))

function promedioBis(arr) {
  var aux = 0;
  for (var i=0; i<arr.length; i++) {
    aux += arr[i];
  }
  console.log('El promedio es: ',aux/i);
  return aux/i;
}

console.log(promedioBis([1,2,3,4,5]))