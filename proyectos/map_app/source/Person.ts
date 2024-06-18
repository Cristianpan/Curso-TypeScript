export abstract class Person {
  protected readonly name: string;
  protected readonly location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, location: { lat: number; lng: number }) {
    this.name = name;
    this.location = location;
  }
}
