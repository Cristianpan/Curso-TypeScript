import { faker } from "@faker-js/faker";
import { Person } from "./Person";
export class Driver extends Person {
  constructor() {
    const name = faker.person.firstName();
    const location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    super(name, location);
  }
}
