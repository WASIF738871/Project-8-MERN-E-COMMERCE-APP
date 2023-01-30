import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Signin_Signup.css';

const Signin = () => {

    const [logdata, setLogdata] = useState({
        email: "",
        password: ""
    });

    console.log(logdata)
    const addData = (e)=>{
        const {name, value} = e.target;
        setLogdata(()=>{
            return {
                ...logdata,
                [name]:value
            }
        })
    }

    return (
        <>
            <section>
                <div className="sign_container">

                    <div className="sign_header">
                        <img src="./blacklogoamazon.png" alt="amazonlogo" />
                    </div>

                    <div className="sign_form">

                        <form action="">

                            <h1>Sign-In</h1>

                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text"
                                    value={logdata.email}
                                    onChange={addData}
                                    name='email' id='email' />
                            </div>

                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    value={logdata.password}
                                    onChange={addData}
                                    placeholder='At least 6 char' name='password' id='password' />
                            </div>

                            <button className="signin_btn">Continue</button>

                        </form>

                    </div>

                    <div className="create_accountinfo">
                        <p>New to Amazon</p>
                        <NavLink to="/register" ><button>Create Your amazon account</button></NavLink>
                    </div>

                </div>

            </section>
        </>
    )
};

export default Signin;