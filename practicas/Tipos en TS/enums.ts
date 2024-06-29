enum role {
  estudiante,
  profesor,
}

interface Persona {
    nombre: string, 
    edad: number,
    telefono?: string,  
    direccion: Direccion, 
    role: role
}

interface Direccion {
    calle: number, 
    cp: number, 
    colonia: string, 
}

const persona : Persona  = {
    nombre: 'Rodrigo', 
    edad: 34, 
    direccion: {
        calle: 13, 
        cp: 90123, 
        colonia: 'Americas'
    },
    role: role.estudiante,
}; 

console.log(persona); 
