import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-auckland',
    predictionPlace: {
      address: 'Auckland, New Zealand',
      bounds: new LatLngBounds(new LatLng(-36.545, 175.298), new LatLng(-37.047,174.498)),
    },
  },
  {
    id: 'default-cincinnati',
    predictionPlace: {
      address: 'Cincinnati, United States',
      bounds: new LatLngBounds(new LatLng(40.155, -83.519), new LatLng(38.155, -85.437)),
    },
  },
  {
    id: 'default-meribel',
    predictionPlace: {
      address: 'Méribel, France',
      bounds: new LatLngBounds(new LatLng(45.550, 6.731), new LatLng(45.243, 6.405)),
    },
  },
  {
    id: 'default-bremen',
    predictionPlace: {
      address: 'Bremen, Germany',
      bounds: new LatLngBounds(new LatLng(53.609, 8.991), new LatLng(53.011, 8.454)),
    },
  },
  {
    id: 'default-bali',
    predictionPlace: {
      address: 'Bali, Indonesia',
      bounds: new LatLngBounds(new LatLng(-7.494, 115.774), new LatLng(-9.356, 114.373)),
    },
  },
];
export default defaultLocations;
