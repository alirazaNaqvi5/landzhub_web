import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            
            <div className="hmain" align='center'>
                {/* <img src="header-img.jpg" alt="" className="h-img" /> */}
                <div className="boxes">
                    <Link to='/calculateLand' style={{textDecoration:'none', color:'black'}} >
                    <div className="box" align='center'>
                        <div>
                            <img src="graphic-design.png" className='icon' alt="" />
                        </div>
                        <div>
                            <span style={{ fontSize: '20px' }}>Calculate Land</span>
                        </div>
                    </div>
                    </Link>

                    <Link to='/addLand' style={{textDecoration:'none', color:'black'}} >
                    <div className="box" align='center'>
                        <div>
                            <img src="plus.png" className='icon' alt="" />
                        </div>
                        <div>
                            <span style={{ fontSize: '20px' }}>Add My Land</span>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="boxes">
                <Link to='/buyLand' style={{textDecoration:'none', color:'black'}} >
                    <div className="box" align='center'>
                        <div>
                            <img src="house.png" className='icon' alt="" />
                        </div>
                        <div>
                            <span style={{ fontSize: '20px' }}>Buy Land</span>
                        </div>
                    </div>
                </Link>
                <Link to='/properties' style={{textDecoration:'none', color:'black'}} >
                    <div className="box" align='center'>
                        <div>
                            <img src="location-pin.png" className='icon' alt="" />
                        </div>
                        <div>
                            <span style={{ fontSize: '20px' }}>My Land</span>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            

        </>
    )
}

export default Header