import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
class RenderMap extends Component {

    constructor(props)
    {
        super(props);
        this.state={
          markerPosition:40.756795
        }
    }
    state = {
        directions: null,
        
      };
    
      shouldComponentUpdate(nextProps, nextState) {
        // Update in all cases EXCEPT when markerPosition changes
              // if (nextState.markerPosition !==  this.state.markerPosition ) {
              //     return true;
              // }
              return false;
      }
  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    
    console.log("Hello",this.props.lat)
//     1)	Bengaluru		12.9716	77.5946
// 2)	Chennai		13.0827	80.2707
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
    }
}   
export default RenderMap; 
