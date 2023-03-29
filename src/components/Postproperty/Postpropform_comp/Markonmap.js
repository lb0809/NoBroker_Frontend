import React, { useState } from 'react'

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: new L.Point(25, 35)
});

L.Marker.prototype.options.icon = DefaultIcon;
const Markonmap = (props) => {
  const { fdata, setfdata } = props
  const { lat, lng } = fdata

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        setfdata({ ...fdata, "lat": e.latlng.lat, "lng": e.latlng.lng })
      },
    });
    return false;
  }


  return (
    <>
      <MapContainer center={[lat, lng]} style={{ margin: '30px', height: '60vh', width: '40wh' }} zoom={7} scrollWheelZoom={false}>
        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvents />
        <Marker position={[lat, lng]} style={{"height":"5%"}}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Markonmap