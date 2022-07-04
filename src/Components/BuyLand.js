import React, { useContext, useEffect, useLayoutEffect } from 'react'
import "./propertiess.css"
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// import LandContext from '../context/land/LandContext'

import { useAuth } from '../hooks/useAuth'
import LandCards from './subComponents/LandCards';



mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxpcmF6YTU1MTIxNCIsImEiOiJja3Y3cXg0YnMwaGJoMm9xdWsyNHQzZG1lIn0.4NP5kY_K4TmHx7BhrxSVww";

const BuyLand = () => {

    const {user} = useAuth();

    const [lands, setLands] = React.useState([])

    useLayoutEffect(()=>{

        console.log("user", user)
        // fetch data from http://localhost:4000/lands/mylands using x-access-token of user and user id
        fetch(`http://localhost:4000/lands/forsell`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.accessToken
            }

        })
        .then(res => res.json())
        .then(data => {
            setLands(data)
            console.log("data====", data)
        }
        )


    },[])


    // useEffect(()=>{
      
    //     if(lands){
    //       setTimeout(()=>{

    //         lands.map(({geometry, id})=>{
    //         const imap = new mapboxgl.Map({
    //           container: id.toString(), // container ID
    //           style: "mapbox://styles/mapbox/satellite-v9", // style URL
    //           center:  geometry[0], // starting position [lng, lat]
    //           zoom: 10, // starting zoom
    //           projection: "globe", // display the map as a 3D globe
    //         })
    //     })

    //       },5000)
    //     }
      
    // },[])


  


    // const l = useContext(LandContext)
    //  className=' container my-3 d-flex flex-nowrap'

    return (
        <div className='pmain properties'>
            {lands.length>0?(
              lands.map((data, i)=>{
                return <LandCards key={i} data={data} />
              }))
            :
            (<div className='container my-3 d-flex flex-nowrap'>
              <div className='col-12'>
                <h1>No Lands Found</h1>
              </div>
            </div>)}
        </div>
    )
}

export default BuyLand