"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
// Comparadores
// Ingrese dos palabras cualesquiera y realice las sigueintes
// comparaciones entre ellas
const texto1 = prompt('Ingrese la primera palabra:');

const texto2 = prompt('Ingrese la segunda palabra:');

//  Compare cual de las dos palabras es mayor (alfabéticamente)
//  Imprima en pantalla según corresponda

// Verifique que copiaTexto1 es igual a texto1
// Imprima en pantalla según corresponda


if(texto1===texto2){
    alert("Los textos ingresados son iguales");
}
else if(texto1>texto2){
    alert("El primer texto es mayor que el segundo");
}
else{
    alert("El segundo texto es mayor que el primero");
}

const copiaTexto1 = texto1  // Copia de la variable texto1

// Verifique que copiaTexto1 es distinta a texto2
// Imprima en pantalla según corresponda

if (copiaTexto1 != texto2){
    alert (copiaTexto1 + " es distinto a "+texto2)
}
else{
    alert (copiaTexto1 + " no es distinto a "+texto2)
}