import React,{useState,useEffect} from 'react';
import { Button } from 'reactstrap';
import "./App.css"
import Map from './Map';
import Map_Loader from "./Map_Loader";
import Map1 from "./Map1";
function App() {

    const [disableButton,setDisableButton]=useState(true);
    const [showRoute,setShowRoute]=useState(false);
    const [mapwidth,setMapWidth]=useState("");
    
    let [sources,setSources]=useState({
      name:"",
      latitude:"",
      longitude:"",
    })
    let [getRoutes,setRoutes]=useState([]);
    useEffect(()=>{
      sessionStorage.setItem("count",1);
      sessionStorage.setItem("count1",1);
      if(window.innerWidth<=1200 && window.innerWidth>=900)
      {
        setMapWidth(380)
      }
      else if(window.innerWidth>=1300)
      {
        setMapWidth(583)
      }
      
    },[]);
    useEffect(()=>{
      console.log(window.innerWidth);
      if(window.innerWidth<=1200 && window.innerWidth>=900)
      {
        setMapWidth(380)
      }
      else if(window.innerWidth>=1300)
      {
        setMapWidth(583)
      }
    },[window.innerWidth])
    const changeInput1=(e)=>{
      // e.preventDefault()
      setSources({
        ...sources,
        name:e.target.value
      })
      if(sessionStorage.getItem("count")==1)
      {
        sessionStorage.setItem("count",2)
      }
      if(sessionStorage.getItem("count1")==1)
      {
        sessionStorage.setItem("count1",2)
      }
      // else if(getRoutes.length<=2)
      // {
      //     sessionStorage.setItem("count",1);
      // }
    }

    const changeInput2=(e)=>{
      if(!isNaN(Number(e.target.value)))
      {
        setSources({
          ...sources,
          latitude:e.target.value
        })
      }
      if(sessionStorage.getItem("count")==1)
      {
        sessionStorage.setItem("count",2)
      }
      if(sessionStorage.getItem("count1")==1)
      {
        sessionStorage.setItem("count1",2)
      }
      // else if(getRoutes.length<=2)
      // {
      //     sessionStorage.setItem("count",1);
      // }
    }
    const changeInput3=(e)=>{
      if(!isNaN(Number(e.target.value)))
      {
        setSources({
          ...sources,
          longitude:e.target.value
        })
      } 
      if(sessionStorage.getItem("count")==1)
      {
        sessionStorage.setItem("count",2)
      }
      if(sessionStorage.getItem("count1")==1)
      {
        sessionStorage.setItem("count1",2)
      }
      // else if(getRoutes.length<=2)
      // {
      //     sessionStorage.setItem("count",1);
      // }
    }
    const resetComponent=(e)=>{
      e.preventDefault();
      sessionStorage.setItem("count",undefined);
      sessionStorage.setItem("count1",undefined);
      setShowRoute(false);
      setDisableButton(true);
      setSources({
        name:"",
        latitude:"",
        longitude:"",
      })
      setRoutes([]);
    }

    const addLocation=()=>{
      setRoutes([...getRoutes,sources]);
      setDisableButton(false);
      setSources({
        name:"",
        latitude:"",
        longitude:""
      })
      
    }

    const getRouteOnMap=(e)=>{
     
      if(getRoutes.length>=2 && !showRoute)
      {
        sessionStorage.setItem("count",1);
      }
      if(getRoutes.length>=2 && showRoute)
      {
        sessionStorage.setItem("count1",1);
      }
      if(showRoute)
      {
      setShowRoute(false);
      }
      else{
        setShowRoute(true);
      }
    }
 
    return (
        <>
        <button className="home" onClick={resetComponent}>Home</button>
        <div className="app">
          <div className="location">
           <div className="container">
            <div className="row">
              <div className="col mt-3">
              <label htmlFor="location name">Location Name</label><br></br>
              <input type="text" placeholder="Location" name="location" id="location" value={sources.name} onChange={changeInput1}></input>
              </div>
              <div className="col mt-3 screen2 ">
              <label htmlFor="Lat.">Enter Latitude</label><br></br>
            <input type="text" placeholder="Latitude" name="Latitude" id="Latitude" value={sources.latitude} onChange={changeInput2}></input>   
              </div>
              <div className="col screen mt-3 screen3">
              <label htmlFor="Long.">Enter Longitude</label><br></br>
            <input type="text" placeholder="Longitude" name="Longitude" id="Longitude" value={sources.longitude} onChange={changeInput3} ></input>   
              </div>
              <div className='col screen screen1 mt-3'>
                <button className="submit" onClick={addLocation}>Submit</button>
              </div>
          </div>
          </div>
            </div>
            <div className="container1">
              <div className="row">
                <div className="col left">
                 
                 <h5 className="coordinates" scope="col">ALL COORDINATES:</h5>
                  <table className="admin__table1">
                  <thead>
                  {getRoutes.length==0?<th className="coordinates1">My-Coordinates</th>:null}

                   
                    {getRoutes.length==0?<th className="padding size" scope="col">DEFAULT</th>:null}
                    {getRoutes.length==0?<th className="padding size" scope="col">DEFAULT</th>:null}
                    </thead>
                  <tbody>
                    <tr scope="row">
                    <td>1){getRoutes.length>=1?getRoutes[0].name:<span> -----</span>}</td>
                    
                    <td className="padding" >{getRoutes.length>=1?getRoutes[0].latitude:<span>-----</span>}</td>
                    <td   className="padding" >{getRoutes.length>=1?getRoutes[0].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr scope="row">
                    <td>2){getRoutes.length>=2?getRoutes[1].name:<span> -----</span>}</td>
                                  
                    <td className="padding">{getRoutes.length>=2?getRoutes[1].latitude:<span>-----</span>}</td>
                    <td className="padding">{getRoutes.length>=2?getRoutes[1].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr scope="row">
                    <td>3){getRoutes.length>=3?getRoutes[2].name:<span> -----</span>}</td>
                    
                    <td className="padding">{getRoutes.length>=3?getRoutes[2].latitude:<span>-----</span>}</td>
                    <td className="padding">{getRoutes.length>=3?getRoutes[2].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr scope="row">
                    <td>4){getRoutes.length>=4?getRoutes[3].name:<span> -----</span>}</td>
                    
                    <td className="padding">{getRoutes.length>=4?getRoutes[3].latitude:<span>-----</span>}</td>
                    <td className="padding">{getRoutes.length>=4?getRoutes[3].longitude:<span>-----</span>}</td>
                    </tr>
                    <tr scope="row">
                    <td>5){getRoutes.length>=5?getRoutes[4].name:<span> -----</span>}</td>
                    
                    <td className="padding">{getRoutes.length>=5?getRoutes[4].latitude:<span>-----</span>}</td>
                    <td className="padding">{getRoutes.length>=5?getRoutes[4].longitude:<span>-----</span>}</td>
                    </tr>
                  </tbody>
                  </table>
                </div>
                <div className="col right">
         {showRoute && getRoutes.length>=2?<Map lat={getRoutes[getRoutes.length-2].latitude} mapwidth={mapwidth} long={getRoutes[getRoutes.length-2].longitude}  lat1={getRoutes[getRoutes.length-1].latitude} long1={getRoutes[getRoutes.length-1].longitude}></Map>:<Map1 lat={getRoutes[getRoutes.length-2]?.latitude}  mapwidth={mapwidth} long={getRoutes[getRoutes.length-2]?.longitude}  lat1={getRoutes[getRoutes.length-1]?.latitude} long1={getRoutes[getRoutes.length-1]?.longitude}></Map1>}
        
        </div>
        <button className={disableButton?"route1":"route"} disabled={disableButton} onClick={getRouteOnMap}>Show Route</button>
        </div>
        
        </div>
        </div>
        </>
    )
    
}

export default App

