/*Ejercicio 1
Utilizando prompt() para ingresar datos y alert() o console.log() para mostrar resultados:
● Pedir al usuario que ingrese dos números
● Mostrar:
○ cuál es mayor
○ o si son iguales
● Validar que sean números
Ayuda: isNaN()*/



let num1 = +prompt('Ingresa un numero');
let num2 = +prompt('Ingresa un numero');


if (isNaN(num1) || isNaN(num2)) {
      alert("Uno o ambos valores no son números");
} else {
    if(num1 > num2){
         alert("El mayor es: " + num1);
    } else if (num2 > num1){
         alert("El mayor es: " + num2);
    } else {
         alert("Los numeros son iguales " + '/ num1 = ' + num1 + ' num2 = ' + num2);
    }
    
}
