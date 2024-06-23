import { Driver } from "./Driver";
import { Mapping } from "./Map";
import { Passenger } from "./Passenger";

(async () => {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  const map = new Mapping("map");
  map.addMarker(new Driver());
  map.addMarker(new Passenger());
  map.searchAddres({
    input: <HTMLInputElement>document.getElementById("address")!,
    searchButton: <HTMLButtonElement>document.getElementById("searchButton")!,
  });
})();
