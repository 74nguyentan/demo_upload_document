export interface IEnvironment {
  production: boolean;
  apiUrl: string;
  map: {
    center: [number, number];
    zoom: number;
    minZoom: number;
    maxZoom: number;
  };
}
