/*Ejercicio 4
Crear un array de objetos:
let personas = [
{ nombre: "Juan", edad: 25 },
{ nombre: "Rocio", edad: 17 },
{ nombre: "Ana", edad: 30 }
];
● Mostrar:
○ Todos los nombres
○ Todos los mayores de 18
Desafío opcional: Mostrar también el promedio de edad*/

let personas = [
{ nombre: "Juan", edad: 25 },
{ nombre: "Rocio", edad: 17 },
{ nombre: "Ana", edad: 30 }
];

console.log(personas[0].nombre);

personas.forEach( p  => console.log(p.nombre) );

console.log("Mayores de 18:");
personas.forEach(function(persona) {
    if (persona.edad >= 18) {
        console.log(persona.nombre);
    }
});

let suma = 0;
let promedio = 0;

console.log("Promedio de edad:");
personas.forEach(function(persona) {
    suma = suma + persona.edad
});

promedio = suma / personas.length;
console.log(promedio);