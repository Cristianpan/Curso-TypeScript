import { MapGeocoder } from "./MapGeocoder";
import { Mappable } from "./Mappable";
import { SearchOptions } from "./SearchOption";

export class Mapping {
  private googleMap: google.maps.Map;
  private geocoder: MapGeocoder; 
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });

    this.geocoder = new MapGeocoder(this.googleMap); 

  }

  /*   
    primera solución
addPassengerMarker(passenger: Passenger) {
    new google.maps.Marker({
      map: this.googleMap,
      position: { ...passenger.getLocation },
    });
  }

  addDriverMarker(driver: Driver) {
    new google.maps.Marker({
      map: this.googleMap,
      position: { ...driver.getLocation },
    });
  } */

  /*  

  //solución con polimorfismo

  addMarker(person: Person) {
    new google.maps.Marker({
      map: this.googleMap,
      position: { ...person.getLocation },
    });
  } */

  //polimorfismo e interfaces
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { ...mappable.getLocation },
    });

    this.geocoder.addMarkerInfo(marker, mappable);
  }

  searchAddres(options: SearchOptions): void{
    this.geocoder.searchAddres(options); 
  }
}
