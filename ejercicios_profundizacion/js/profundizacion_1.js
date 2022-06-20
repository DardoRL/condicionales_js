"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.
let numero1 = parseInt(prompt('Ingrese el primer número:\n'));
let numero2 = parseInt(prompt('Ingrese el segundo número:\n'));
let resultado = numero1 - numero2;
if (resultado>0){
    alert("El resultado de restar el primer numero del segundo da como resultado un numero positivo");
}
else if(resultado<0){
    alert("El resultado de restar el primer numero del segundo da como resultado un numero negativo");
}
else{
    alert ("El resultado de restar el primer numero del segundo numero es cero")
}