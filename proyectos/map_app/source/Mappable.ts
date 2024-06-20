export interface Mappable {
  getLocation: {
    lat: number;
    lng: number;
  };

  markerTitle(addres: () => string): string;
}
