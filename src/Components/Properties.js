import React, { useContext, useEffect } from 'react'
import "./propertiess.css"
import axios from 'axios'
// import LandContext from '../context/land/LandContext'

import { useAuth } from '../hooks/useAuth'
import LandCards from './subComponents/LandCards'


const Properties = () => {

    const {user} = useAuth();

    const [lands, setLands] = React.useState([])

    useEffect(()=>{

        // make axios.get request with body of user_id and header of x-access-token
        axios.get(`http://localhost:4000/lands/mylands?user_id=${user.id}`, {
            headers: {
                'x-access-token': user.accessToken
            },
            data: {
                user_id: user.id
            }
        }).then(res => {
            console.log("res", res)
            setLands(res.data)
        }
        )


    },[])




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

export default Properties