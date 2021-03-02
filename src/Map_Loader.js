import React, { Component } from 'react';
import { render } from 'react-dom';
import { withScriptjs,withGoogleMap } from "react-google-maps";
import Map from './Map';


const Map_Loader = (props) => {
    
  const MapLoader = withScriptjs( Map );

  return (
    <MapLoader
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }}
      lat="40.756795" />}
    />
  );
};

export default Map_Loader


