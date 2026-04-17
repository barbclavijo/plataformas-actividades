/*Ejercicio 2
Crear un array con 5 números
Mostrar:
● El primero
● El último
● La cantidad de elementos
Recorrer el array y mostrar todos los valores */ 

let numeros = [10,5,7,12,43];

console.log('El primer número del array es ' + numeros[0]);
console.log('El último número del array es '+ numeros[numeros.length-1])
let cantidad = numeros.length
console.log('La cantidad de elementos en el array es ' + cantidad)

for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento:", numeros[i]);
}
