import React from "react";
import './Login.css'
import bg_img from '../Home/Images/gym_bg.webp'

export default function Login(){
    return(
        <div className="login-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container-login">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                    <br/> <br/>
                    <p>New to Gym49, Register <span className="l-text">here</span> </p>
                </form>
            </div>
        </div>
    )
}