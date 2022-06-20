"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos

const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda



if (numero1==numero2){
    alert("Los numeros ingresados son iguales");
}
else if (numero1>numero2){
    alert("El primer numero ingresado es mayor que el segundo");
}
else{
    alert("El segundo numero ingresado es mayor que el primero");
}

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

if (numero1>0){
    alert("El primer numero ingresado es positivo");
}
else if (numero1<0){
    alert("El primer numero ingresado es negativo");
}   
else if (numero1==0){
    alert("El primer numero ingresado es igual a cero");
} 

// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

if ((numero1>0) && (numero1<100)){
    alert("El primer numero ingresado es mayor que cero y menor a 100");
}
else{
    alert("El primer numero ingresado no cumple la condicion de ser mayor que cero y menor a 100");
}

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if ((numero1<10) || (numero2>-2)){
    alert("El primer numero ingresado es menor que 10 ó el segundo numero ingresado es mayor que -2");
}
else{
    alert("Los numeros ingresados no cumplen con la condicion");
}