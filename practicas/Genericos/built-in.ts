class Vehicle {
  branch: string = "";
  model: string = "";
}

function createVehicle(): Vehicle {
  const vehicle: Partial<Vehicle> = {};
  vehicle.branch = "Ford";

  return vehicle as Vehicle;
}

let cars: Readonly<string[]> = ["ford", "mazda"];


