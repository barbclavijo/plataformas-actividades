/*Ejercicio 3
● Pedir números hasta ingresar 0
● Guardarlos en un array
● Mostrar:
○ Cantidad de números
○ Suma total */


numeros = [];
let numero;
let suma = 0;

do {
    numero = +prompt('Ingresa un numero');
    if (!isNaN(numero) && numero !== 0) {
        numeros.push(numero);
        suma += numero;
    }
} while (numero !== 0);

console.log("Cantidad de números:", numeros.length);
console.log("Suma total:", suma);
