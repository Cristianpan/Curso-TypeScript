export class MapGeocoder {
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;

  constructor(map: google.maps.Map) {
    this.map = map;
    this.geocoder = new google.maps.Geocoder;
  }

  addMarkerInfo(marker: google.maps.Marker): void {
    marker.addListener("click", () => {
      const latlng = {
        lat: marker.getPosition()!.lat(),
        lng: marker.getPosition()!.lng(),
      };

      this.geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          const infoWindow = new google.maps.InfoWindow({
            content: results[0].formatted_address,
          });
          infoWindow.open(this.map, marker); 
        } else {
            window.alert(`Error en la geolocalización: ${status}`)
        }
      });
    });
  }
}
