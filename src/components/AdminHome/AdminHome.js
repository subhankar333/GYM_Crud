import React from "react";
import bg_img from '../Home/Images/gym_bg.webp'
import './AdminHome.css'


export default function AdminHome(){
    var name = sessionStorage.getItem('name')
    return(
        <div className="home">
            <img src={bg_img} className="img-bg"/> 
            <div className="home-content">
                    <h2>Welcome back to Gym49, {sessionStorage.getItem('name')} 😎</h2>
            </div>
        </div>
    )
}