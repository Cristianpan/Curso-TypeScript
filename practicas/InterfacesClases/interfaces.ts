enum Role {
    Doctor, 
    Anestesista, 
    Asistente, 
    Administrativo, 
}

/**
 * Interfaces solo definen estructura del objeto y modelan 
 * mejor la aplicación 
 */

interface Staff {
    name: string, 
    email: string, 
    role: Role, 
}

interface Billable {
    total: number, 
    currentBill(): string,
}

const medico: Staff & Billable = {
    name: "Martin", 
    email: "martin@test.com", 
    role: Role.Doctor, 
    total: 25, 
    currentBill(){
        return `Valor actual de la factura es de ${this.total}`
    }
}

const printStaff = (staff: Staff) : void => {
    console.log(staff); 
}

const printCurrentBill = (bill: Billable) : void => {
    console.log(bill.currentBill()); 
}

printStaff(medico); 
printCurrentBill(medico);