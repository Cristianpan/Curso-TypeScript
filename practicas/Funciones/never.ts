/**
 * never indica que nunca va a retornar nada 
 * en la función ya que el 'return' nunca va a poder ser ejecutado
 *  
 */
const throwError = (message: string) => {
    throw new Error(message); 
}
