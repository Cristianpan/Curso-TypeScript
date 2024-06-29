/**
 * A diferencia de JS, TS tiene un tipado estático
 */

const number: number = 1;

const string: string = "Hola mundo";

const boolean: boolean = true;

const sumar = (value1: number, value2: number): number => value1 + value2;

sumar(2, 3); //5

sumar(2, "3"); // error
