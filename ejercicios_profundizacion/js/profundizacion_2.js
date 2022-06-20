"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.
alert ("Por favor ingrese 3 numeros enteros")
let numero1 = parseInt(prompt('Ingrese el primer número:\n'));
let numero2 = parseInt(prompt('Ingrese el segundo número:\n'));
let numero3 = parseInt(prompt('Ingrese el tercer número:\n'));
if (numero1%2==0){
    alert(" El primer numero ingresado es par");
}
else{
    alert ("El primer numero ingresado es impar");
}
if (numero2%2==0){
    alert(" El segundo numero ingresado es par");
}
else{
    alert ("El segundo numero ingresado es impar");
}
if (numero3%2==0){
    alert(" El tercer numero ingresado es par");
}
else{
    alert ("El tercer numero ingresado es impar");
}