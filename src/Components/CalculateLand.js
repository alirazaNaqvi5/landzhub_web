import React, { useEffect, useState } from "react";
import "./AddLand.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
// import modal from react-bootstrap
import { Modal, Button } from "react-bootstrap";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww";

const CalculateLand = () => {

    const [Area, setArea] = useState(0);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Geometry, setGeometry] = useState([]);

  var map;
  useEffect(() => {
    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww";

    map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/satellite-v9", // style URL
      center: Geometry.length>0 ? Geometry[0]:  [73.09, 33.72], // starting position [lng, lat]
      zoom: 15, // starting zoom
      projection: "globe", // display the map as a 3D globe
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      }),
      'top-left'
    );

    // const marker1 = new mapboxgl.Marker().setLngLat([73.09, 33.72]).addTo(map);

    map.addControl(new mapboxgl.NavigationControl());

    var Draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
        polygon: true,
        trash: true
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: 'draw_polygon'
        });

// Map#addControl takes an optional second argument to set the position of the control.
// If no position is specified the control defaults to `top-right`. See the docs
// for more details: https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol

map.addControl(Draw, 'top-left');

    //   get geometry from map draw
    map.on('draw.create', function (e) {
        var type = e.features[0].geometry.type;
        var coordinates = e.features[0].geometry.coordinates;
        console.log(type, coordinates);
        // console.log("dataaaaaa========>",Draw.getAll())
        const data = Draw.getAll();
        if (data.features.length > 0) {
            const area = turf.area(data);
            // Restrict the area to 2 decimal points.
            const rounded_area = Math.round(area * 100) / 100;
            setArea(rounded_area);
            handleShow();
            // answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
            }
    })


    // map.on('click', function(e) {
    //     // get lat lng of the click
        
    //        console.log(e.lngLat.lng)
    //     setGeometry([...Geometry, [e.lngLat.lng, e.lngLat.lat]]);
    //         console.log(Geometry); 
    //     })

       



    //     if(Geometry !== []){
    //         map.on("load", () => {
    //           // Add a data source containing GeoJSON data.
    //           map.addSource("maine", {
    //             type: "geojson",
    //             data: {
    //               type: "Feature",
    //               geometry: {
    //                 type: "Polygon",
    //                 // These coordinates outline Maine.
    //                 coordinates: [
    //                   Geometry,
    //                 ],
    //               },
    //             },
    //           });
        
    //           // Add a new layer to visualize the polygon.
    //           map.addLayer({
    //             id: "maine",
    //             type: "fill",
    //             source: "maine", // reference the data source
    //             layout: {},
    //             paint: {
    //               "fill-color": "#0080ff", // blue color fill
    //               "fill-opacity": 0.5,
    //             },
    //           });
    //           // Add a black outline around the polygon.
    //           map.addLayer({
    //             id: "outline",
    //             type: "line",
    //             source: "maine",
    //             layout: {},
    //             paint: {
    //               "line-color": "#000",
    //               "line-width": 3,
    //             },
    //           });
    //         });
    //       }

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });
  }, [Geometry]);

  //   get location from mapbox on click
  // const getLocation = () => {
  // map.on('click', function(e) {
  //     var lng = e.lngLat.lng;
  //     var lat = e.lngLat.lat;
  //     console.log(lng, lat);
  // }
  // )
  // }

  

  return (
    <>
      {/* <h1>hello</h1> */}
      <div id="map" style={{  height: "92vh" }}></div>


      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> <h1>Area is <strong>{Area * 1.196}</strong>  yards</h1> </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default CalculateLand;
