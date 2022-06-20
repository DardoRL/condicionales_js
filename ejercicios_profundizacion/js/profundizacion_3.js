"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// En este ejercicio les pediremos que investiguen por su cuentan
// algunas propiedades de javascript para manipular números
// usando la librería "Math":
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

// Realice un programa que solicite ingresar tres valores de temperatura
// De las temperaturas ingresadas por consola determinar:
// 1 - ¿Cuáles de ellas es la máxima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.max",
// investigue y busque como utilizarla.
// 2 - ¿Cuáles de ellas es la mínima temperatura ingresada?
// Para este caso haga uso de la herramienta "Math.min",
// investigue y busque como utilizarla.

// En cada caso imprimir en pantalla el resultado
alert ("Por favor ingrese 3 valores de temperatura");
let temperatura1 = parseInt(prompt('Ingrese el primer valor:\n'));
let temperatura2 = parseInt(prompt('Ingrese el segundo valor:\n'));
let temperatura3 = parseInt(prompt('Ingrese el tercer valor:\n'));
let maxtemp = Math.max(temperatura1, temperatura2, temperatura3);
let mintemp = Math.min(temperatura1, temperatura2, temperatura3);
alert ("La temperatura mas alta es " + maxtemp );
alert ("La temperatura mas baja es " + mintemp );