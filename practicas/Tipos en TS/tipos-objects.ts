interface Persona {
    nombre: string, 
    edad: number,
    telefono?: string,  
    direccion: Direccion
}

interface Direccion {
    calle: number, 
    cp: number, 
    colonia: string, 
}

const persona : Persona  = {
    nombre: 'Rodrigo', 
    edad: 34, 
    //civil: 'soltero', error porque no está definida en la interfaz 
    direccion: {
        calle: 13, 
        cp: 90123, 
        colonia: 'Americas'
    }
}; 




