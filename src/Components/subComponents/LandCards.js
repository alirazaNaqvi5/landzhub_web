// import { data } from 'autoprefixer'
import React from 'react'
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";


function LandCards({data}) {

    React.useEffect(()=>{
        if(data.geometry.length>0){

            // convert text string to array of geometry points
            console.log("geometry for card data ====>", data.geometry+']]')

            // convert data.geometry to geoJason
            const geoJson = JSON.parse(data.geometry)
            console.log("geoJson for card data ====>", geoJson)

            
            const map = new mapboxgl.Map({
                container: data.id.toString() , // container ID
                style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
                center: geoJson[0], // starting position [lng, lat]
                zoom: 13, // starting zoom
                projection: "globe", // display the map as a 3D globe
              })
              map.addControl(new mapboxgl.FullscreenControl());
              
            map.on("load", () => {
              // Add a data source containing GeoJSON data.
              map.addSource("maine", {
                type: "geojson",
                data: {
                  type: "Feature",
                  geometry: {
                    type: "Polygon",
                    // These coordinates outline Maine.
                    coordinates: [
                        geoJson,
                    ],
                  },
                },
              });
        
              // Add a new layer to visualize the polygon.
              map.addLayer({
                id: "maine",
                type: "fill",
                source: "maine", // reference the data source
                layout: {},
                paint: {
                  "fill-color": "#0080ff", // blue color fill
                  "fill-opacity": 0.5,
                },
              });
              // Add a black outline around the polygon.
              map.addLayer({
                id: "outline",
                type: "line",
                source: "maine",
                layout: {},
                paint: {
                  "line-color": "#000",
                  "line-width": 3,
                },
              });
            });
        }
    },[data])

  return (
    <>
        
            
                  <div  className='card' key={data.id+5}>
                      <div className='propimg' id={data.id} style={{
                        height: "200px",
                        width: "30%",
                      }}>
  
  
                          {/* <img className='imgbrd' width={"78%"} height={"50%"} src='https://media.istockphoto.com/photos/land-plot-in-aerial-view-for-development-or-investment-picture-id1320071761?b=1&k=20&m=1320071761&s=170667a&w=0&h=Fk1lLNxzE8OAPO2M9-0q8QOnduDbgyWij80u9R4fMxU=' /> */}
                      </div>
                      <div className='cardtext'>
                          <div>
                              
                              <strong> Price : {data.price}</strong>
                              <br/>
                              <br/>
                              <strong><h1>Area {data.area} Yards </h1></strong>
                              
                            <strong>Address : {data.address} </strong>                            
                              <br />
                              {/* <strong>1222 Sq. Ya.</strong> */}
                          </div>
                          <div className=''>
                          <div>
                              </div>
                              <div>
                                  Email : <a href={'tel:'+data.user.email}>{data.user.email}</a>
                              </div>
                              <div>
                                  Phone : <a href={'tel:'+data.user.phone}>{data.user.phone}</a> 
                              </div>
                              <div>
                                 <strong> Description : {data.description}</strong>
                              </div>
                          </div>
                      </div>
                  </div>
  
                   
  
  
             
        
    </>
  )
}

export default LandCards