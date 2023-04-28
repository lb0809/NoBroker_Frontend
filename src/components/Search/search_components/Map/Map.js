import React, { useState,useEffect } from 'react'

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap,Marker,Popup,useMapEvents } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';

import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import LocationCard from './LocationCard/LocationCard ';
import { duration } from '@mui/material';
let DefaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3394/3394645.png",
    iconSize: new L.Point(25, 35)
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props) => {
    const{lat,lng,data}=props
    // const map = useMap();
    // useEffect(() => {
    //   map.flyTo([lat,lng], 13);
    // },[lat,lng,map])
    
  const FlyMapTo=(props2) =>{
    const map = useMap();
  
    useEffect(() => {
      map.flyTo(props2.center, props2.zoom,{
        animate:true,
        duration:0.5
      });
    });
  
    return null;
  }

  return (
    
    <>
  <MapContainer center={[lat,lng]} style={{ "height": '100vh', "width": '100%' }} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data!==null&&<Marker position={[lat,lng]}>
      <div className="" style={{"width":"30px"}}>
      <Popup >
        
      
      
        <LocationCard data={data}/>
        
      </Popup>
      </div>
    </Marker>
    }
    <Marker position={[lat+0.1,lng]}>
      <div className="" style={{"width":"30px"}}>
      <Popup >
        
      
      
        <LocationCard data={data}/>
        
      </Popup>
      </div>
    </Marker>
    <FlyMapTo center={[lat,lng]} zoom={13} />
  </MapContainer>
    </>
  )
}

export default Map