// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import LandContext from '../context/land/LandContext'



import React, { useEffect, useState } from "react";
import "./AddLand.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { accessToken } from "mapbox-gl";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
// import modal from react-bootstrap
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import {useAuth} from '../hooks/useAuth'



mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww";

const AddLand = () => {

  const {user} = useAuth()
    // ================ form states ======================
    //     const [name, setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [area, setArea] = useState('')
    // const [address, setAddress] = useState('')
    // const [desc, setDesc] = useState('')
    // const [img, setImg] = useState();

    const [landInfo, setLandInfo] = useState({
      name:"",
      price:"",
      user_id:user.id,
      description:"",
      geometry:"",
      area:"",
      address:"",

    })

    // =================== END of form states ======================

    // const [Area, setArea] = useState(0);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Geometry, setGeometry] = useState(null);


    








  var map;
  useEffect(() => {
    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww";

    map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/satellite-v9", // style URL
      center: [73.09, 33.72], // starting position [lng, lat]
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
        // console.log("dataaaaaa========>",Draw.getAll())
        let g = coordinates[0].toString();
        setGeometry(coordinates[0]);
        console.log("type============================>", JSON.stringify(coordinates[0]));
        setLandInfo({...landInfo, geometry: coordinates[0] })
        console.log("Geometry============================>", JSON.stringify(Geometry));
        const data = Draw.getAll();
        if (data.features.length > 0) {
            const area = turf.area(data);
        console.log("geometry============================>", landInfo.geometry);

            // Restrict the area to 2 decimal points.
            const rounded_area = Math.round(area * 100) / 100;
            setLandInfo({...landInfo, area: rounded_area});
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
  }, []);

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
            <Modal.Title><h3 className="text-center text-info">Add Your Land</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          {/* <form id="login-form" className="form" action="/properties" method="post"> */}
                                
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Give a name to your Land:</label><br />
                                    <input type="text" className="form-control" onChange={(e)=>{
                                        setLandInfo({...landInfo , name : e.target.value})
                                    }} value={landInfo.name} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Enter Price:</label><br />
                                    <input type="number" onChange={(e)=>{
                                        setLandInfo({...landInfo , price : e.target.value})
                                    }} value={landInfo.price} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Enter Land Area: (In Yards)</label><br />
                                    <input type="number" onChange={(e)=>{
                                        setLandInfo({...landInfo , area : e.target.value})
                                    }} value={landInfo.area} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Enter Land Address:</label><br />
                                    <input type="text" onChange={(e)=>{
                                        setLandInfo({...landInfo , address : e.target.value})
                                    }} value={landInfo.address} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Description:</label><br />
                                    <input type="text" onChange={(e)=>{
                                        setLandInfo({...landInfo , description : e.target.value})
                                    }} value={landInfo.desc} className="form-control" required />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="username" className="text-info">Select Image of your land:</label><br />
                                    <input type="file" onChange={onImageChange} value={img} className="form-control" required />
                                    <img src={img} alt="" />
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"></label>
                                    {/* <Link to='/properties'> */}
                                    <input type="submit"  className="btn btn-info btn-md" value="submit" 
                                    onClick={()=>{
                                        // post landInfo to server
                                        console.log({...landInfo, geometry: JSON.stringify(Geometry)});
                                        axios.post('http://localhost:4000/lands/addland', {...landInfo, geometry: JSON.stringify(Geometry)} , {
                                          headers: {
                                            'Content-Type': 'application/json',
                                            'x-access-token': user.accessToken
                                        }
                                       
                                        }
                                        ).then(res => {
                                            console.log(res);
                                            // handleClose();
                                        })
                                  }}
                                    />
                                    {/* </Link> */}
                                </div>
                            {/* </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default AddLand;






// const AddLand = () => {

//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [area, setArea] = useState('')
//     const [address, setAddress] = useState('')
//     const [desc, setDesc] = useState('')
//     const [img, setImg] = useState();

//     const l = useContext(LandContext)

//     var id = 0

    // const onSubmit = () => {
    //     id++;
    //     if (!name || !price || !area || !address || !desc || !img) {
    //         if (!name) {
    //             console.log('Please Enter Name!')
    //         }
    //         if (!price) {
    //             console.log('Please Enter Price!')
    //         }
    //         if (!area) {
    //             console.log('Please Enter Area!')
    //         }
    //         if (!address) {
    //             console.log('Please Enter Address!')
    //         }
    //         if (!desc) {
    //             console.log('Please Enter Description!')
    //         }
    //         if (!img) {
    //             console.log('Please add Image:')
    //         }
    //     }
    //     else {

    //         console.log('Submitted')
    //         alert("Details are added to My Land")
    //         l.push({ id, name, price, area, address, desc, img })
    //         console.log(l)
    //     }
    // }






    // const onImageChange = (e) => {
    //     const [file] = e.target.files;
    //     setImg(URL.createObjectURL(file));
    // };

    // const handleOnChangeN = (e) => {
    //     setName(e.target.value)
    // }

    // const handleOnChangeP = (e) => {
    //     setPrice(e.target.value)
    // }

    // const handleOnChangeAd = (e) => {
    //     setAddress(e.target.value)
    // }

    // const handleOnChangeA = (e) => {
    //     setArea(e.target.value)
    // }

    // const handleOnChangeD = (e) => {
    //     setDesc(e.target.value)
    // }


//     return (
//         <div id="login">
//             <h3 className="text-center text-white pt-5">Add Your Land</h3>
//             <div className="container">
//                 <div id="login-row" className="row justify-content-center align-items-center">
//                     <div id="login-column" className="col-md-6">
//                         <div id="login-box" className="col-md-12">
                            // <form id="login-form" className="form" action="/properties" method="post">
                            //     <h3 className="text-center text-info">Add Your Land</h3>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Give a name to your Land:</label><br />
                            //         <input type="text" className="form-control" onChange={handleOnChangeN} value={name} required />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Enter Price:</label><br />
                            //         <input type="number" onChange={handleOnChangeP} value={price} className="form-control" required />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Enter Land Area: (In Yards)</label><br />
                            //         <input type="number" onChange={handleOnChangeA} value={area} className="form-control" required />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Enter Land Address:</label><br />
                            //         <input type="text" onChange={handleOnChangeAd} value={address} className="form-control" required />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Description:</label><br />
                            //         <input type="text" onChange={handleOnChangeD} value={desc} className="form-control" required />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="username" className="text-info">Select Image of your land:</label><br />
                            //         <input type="file" onChange={onImageChange} value={img} className="form-control" required />
                            //         <img src={img} alt="" />
                            //     </div>
                            //     <div className="form-group">
                            //         <label htmlFor="remember-me" className="text-info"></label>
                            //         {/* <Link to='/properties'> */}
                            //         <input type="submit" onClick={onSubmit} className="btn btn-info btn-md" value="submit" required />
                            //         {/* </Link> */}
                            //     </div>
                            // </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }



// export default AddLand