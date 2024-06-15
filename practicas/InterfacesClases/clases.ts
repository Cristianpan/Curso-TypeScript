enum TypeOfCurrency {
  USD, 
  PESO
}

interface Billable {
  currentBill(): string,
}

abstract class Vehicle {
  constructor(
    private readonly brandName: string,
    private model: string,
    private color: string,
    private price: number
  ) {}

  abstract drive(): void;

  get getPrice(): number{
    return this.price;
  }

  set setPrice(price: number){
    this.price = price; 
  }

  static priceToCurrency(value: number, typeOfCurrency: TypeOfCurrency){
    switch(typeOfCurrency){
      case 0: 
        return `US${value}`
      case 1: 
        return `$${value}`
      default: 
        return "No existe el tipo de moneda";
    }
  } 
}

class Car extends Vehicle implements Billable {
  drive(): void {
    console.log("Estoy conduciendo un auto");
  }
  
  currentBill(): string {
      return `La factura es ${this.getPrice}`;
  }
}

class Airplane extends Vehicle{
  drive(): void {
    console.log("Estoy conduciendo un avión");
  }
}

const vehicle = new Car("mazda", "asd123", "blue", 200);

console.log(vehicle);
vehicle.drive();
vehicle.setPrice = 300;
console.log(vehicle.getPrice);

console.log(vehicle.currentBill()); 
console.log(Car.priceToCurrency(vehicle.getPrice, TypeOfCurrency.PESO));
