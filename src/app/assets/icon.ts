import icon from './jamef.svg'

export function createBaseIcon() {
  return {
    url: icon.src,
    scaledSize: new google.maps.Size(40, 40),
    anchor: new google.maps.Point(40, 40),
  };
}