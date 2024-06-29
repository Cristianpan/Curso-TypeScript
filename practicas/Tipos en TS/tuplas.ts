const tupla: [number, string] = [1, "hola"];

//su similar es: tupla2: Array<number | string>
const tupla2: (number | string)[] = [1, "hola", "mundo", 2]; 

//definir un tipo de dato personalizado
type vehiculoType = [string, number, string]; 


let automovil: vehiculoType = ['mazda', 2020, 'rojo']; 
let motocicleta: vehiculoType = ['yamaha', 2020, 'rojo']; 
