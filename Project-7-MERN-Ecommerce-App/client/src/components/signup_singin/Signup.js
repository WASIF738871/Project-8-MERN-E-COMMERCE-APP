import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Signin_Signup.css';

const Signup = () => {

    const [userData, setUserData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
    // console.log(userData)

    const addData = (e) => {
        const { name, value } = e.target;

        setUserData(() => {
            return {
                ...userData,
                [name]: value
            }
        })
    }

    const sendData = async (e) => {
        e.preventDefault();

        const storedData = await fetch("/users/api1/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const res = await storedData.json()
        // console.log(res)

       if(res.status === true){ setUserData({
            ...userData,
            fname: "",
            email: "",
            mobile: "",
            password: "",
            cpassword: ""
        })}
        if (res) {
            alert(res.message)
        }
    }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="amazonlogo" />
                </div>
                <div className="sign_form">
                    <form action="">
                        <h1>Sign-Up</h1>

                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text"
                                value={userData.fname}
                                onChange={addData}
                                name='fname' id='fname' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                value={userData.email}
                                onChange={addData}
                                name='email' id='email' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
                                value={userData.mobile}
                                onChange={addData}
                                name='mobile' id='mobile' />
                        </div>


                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                value={userData.password}
                                onChange={addData}
                                placeholder='At least 6 char' name='password' id='password' />
                        </div>

                        <div className="form_data">
                            <label htmlFor="cpassword">Passwordn again</label>
                            <input type="password"
                                value={userData.cpassword}
                                onChange={addData}
                                name='cpassword' id='cpassword' />
                        </div>

                        <button className="signin_btn" onClick={sendData}>Continue</button>

                        <div className="signin_info">
                            <p>Already have an account ?</p>
                            <NavLink to="/login">Signin</NavLink>
                        </div>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon</p>
                </div>
            </div>
        </section>
    )
};

export default Signup;