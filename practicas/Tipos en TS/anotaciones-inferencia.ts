/**
 * Anotación: Se indica explícitamente el tipo de dato
 * Inferencia: TS infiere el tipo de dato dado su valor inicial
 * 
 * Una vez que se determina el tipo de dato, no puede ser cambiado 
 * durante el tiempo de vida del script. 
 * 
 */

//anotacion 
const value: string = "Hola mundo";
console.log(typeof value); 

//inferencia 
let value2 = 12313; 
console.log(typeof value2); 

value2 = "1231"; //error porque se infirió que el tipo de dato es 'number'

