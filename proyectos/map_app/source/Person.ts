import { Mappable } from "./Mappable";
export abstract class Person implements Mappable {
  protected readonly name: string;
  protected readonly location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, location: { lat: number; lng: number }) {
    this.name = name;
    this.location = location;
  }

  get getLocation() {
    return this.location;
  }

  markerTitle(addres: () => string): string {
    return `La direccion de ${this.name} es ${addres()}`; 
  }
}
