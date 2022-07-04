import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Regis() {

  const navigate = useNavigate();

    
    
    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [uname, setUname] = useState('')

    const [pass, setPass] = useState('')

    const [userInfo, setUserInfo] = useState({
        username: '',
        name: '',
        password: '',
        email: '',
        phone: '',
    })

    const onSubmit = () => {
        if(userInfo.username && userInfo.password && userInfo.email){
            // localhost:4000/auth/signup
            fetch('http://localhost:4000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message === 'User was registered successfully!'){
                    navigate("/login");

                }
                else{
                    alert(data.message)
                }
            }
            )

        }
        else {
            console.log('Please Enter Name!')
        }
    }

    const handleOnChange = (e) => {
        setUserInfo({...userInfo, name:e.target.value})
    }

    const handleOnChangeE = (e) => {
        setUserInfo({...userInfo, email:e.target.value})
    }

    const handleOnChangeN = (e) => {
        setUserInfo({...userInfo, phone:e.target.value})
    }

    const handleOnChangeU = (e) => {
        // setUname(e.target.value)
        setUserInfo({...userInfo, username:e.target.value})
    }

    const handleOnChangeP = (e) => {
        setPass(e.target.value)
        setUserInfo({...userInfo, password :e.target.value})
    }

    return (
        <div id="login">
            <h3 className="text-center text-white pt-5">Registration form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            {/* <form id="login-form" className="form" action="" method="post"> */}
                                <h3 className="text-center text-info">SignUp</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Your Name:</label><br/>
                                    <input type="text" name="username" className="form-control" onChange={handleOnChange} value={userInfo.name} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Email:</label><br/>
                                    <input type="text" name="username" className="form-control" onChange={handleOnChangeE} value={userInfo.email} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Phone number:</label><br/>
                                    <input type="text" name="username" className="form-control" onChange={handleOnChangeN} value={userInfo.phone} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" className="form-control" onChange={handleOnChangeU} value={userInfo.username} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="password" name="password" className="form-control" onChange={handleOnChangeP} value={userInfo.password} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"></label>
                                    <input type="submit" name="submit" onClick={onSubmit} className="btn btn-info btn-md" value="submit" />
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Regis
