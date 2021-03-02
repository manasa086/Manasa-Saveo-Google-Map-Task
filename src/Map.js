
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Map extends Component {

    constructor(props)
    {
        super(props);
    }
    state = {
        directions: null,
        mapwidth:""
        
      };
    
      shouldComponentUpdate(nextProps, nextState) {
      
              if(sessionStorage.getItem("count")==1)
              {
                return true
              }
              else{
                  return false;
              }
      }
  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    
 
    const origin = { lat: Number(this.props.lat), lng: Number(this.props.long) };
    const destination = { lat:Number(this.props.lat1), lng: Number(this.props.long1) };
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    )
    
  }
  
 
  

  render() {
    // this.props.onLoad(google)
    const GoogleMapExample = withGoogleMap(props => (
      
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >
          
        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
  
    ));
      
    return (
      <div>
        
      
        <GoogleMapExample
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places"
         loadingElement={<div style={{ height: `100%` }}/>}
          containerElement={<div style={{ height: `516px`,width:`42.8vw` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;


