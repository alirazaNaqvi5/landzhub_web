import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

import {useAuth} from '../hooks/useAuth'

function Navbar() {
    const {user, logout} = useAuth();
    return (
        <>
            <div className='navBar'>
                <Link to="/">
                    <img src="logo192.png" alt="" className="logo" />
                </Link>
                <div>
                    <ul>
                        <li><Link to='/' className='link'>HOME</Link></li>
                        {/* <li><Link to='/properties' className='link'>PROPERTIES</Link></li> */}
                        {/* <li>STATES</li> */}
                        <li><Link to='/aboutus' className='link'>ABOUT US</Link></li>
                        <li><Link to='/contactus' className='link'>CONTACT US</Link></li>
                    </ul>
                </div>
                { user ? 
                (
                // <Link to="/" className='link'>
                    <button onClick={()=>{logout()}}>
                        <div>
                            <img src="login.png" width={'35px'} height={'35px'} alt="" />
                        </div>
                        <div className="logintxt">LogOut</div>
                    </button>
                // </Link>
                )
                :
                (<Link to="/login" className='link'>
                    <button>
                        <div>
                            <img src="login.png" width={'35px'} height={'35px'} alt="" />
                        </div>
                        <div className="logintxt">Login</div>
                    </button>
                </Link>)
                }
            </div>

        </>
    )
}

export default Navbar