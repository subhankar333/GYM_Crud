import React from "react";
import bg_img from './Images/gym_bg.webp'
import './Home.css'


export default function HomeComponent(){
    return(
        <div className="home">
            <img src={bg_img} className="img-bg"/> 
            <div className="home-content">
                    <h2>Welcome to Gym49, Join us from today 😎</h2>
            </div>
        </div>
    )
}