import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import {useAuth} from '../hooks/useAuth'


function Login() {


    const {login} = useAuth();


    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })


    const onSubmit = async() => {
        const response = await fetch('http://localhost:4000/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data = await response.json()
        console.log(data)

        if(data.accessToken){
            login(data)
        }
        else{
            alert(data.message)
        }
        // if(name) {
        //     console.log('Submitted')
        // }
        // else {
        //     console.log('Please Enter Name!')
        // }
    }

    const handleOnChange = (e) => {
        setUserInfo({...userInfo, username:e.target.value})
    }

    const handleOnChangeP = (e) => {
        setUserInfo({...userInfo, password :e.target.value})
    }

    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            {/* <form id="login-form" className="form" action="" method="post"> */}
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" className="form-control" onChange={handleOnChange} value={userInfo.username} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="password" className="form-control" onChange={handleOnChangeP} value={userInfo.password} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                                    <input type="submit" onClick={onSubmit} className="btn btn-info btn-md" value="submit" />
                                </div>
                                <div id="register-link" className="text-right">
                                    <Link to="/regis" className="text-info" >SignUp</Link>
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

                    export default Login
