import React from "react";
import './Register.css'
import bg_img from '../Home/Images/gym_bg.webp'

export default function Register(){
    return(
        <div className="register-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <button type="submit">Register</button>
                    <br/> <br/>
                    <p>Already a User, Go to <span className="l-text">Login</span> </p>
                </form>
            </div>
        </div>
    )
}