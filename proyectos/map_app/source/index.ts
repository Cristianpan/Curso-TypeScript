import { Driver } from "./Driver";
import { Mapping } from "./Map";
import { Passenger } from "./Passenger";

const map = new Mapping("map");
map.addMarker(new Driver());
map.addMarker(new Passenger());

map.searchAddres({
    input:<HTMLInputElement> document.getElementById("address")!, 
    searchButton: <HTMLButtonElement> document.getElementById("searchButton")!
})