import React from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();
    const isAdmin = JSON.parse(sessionStorage.getItem("isAdmin")); // Parse sessionStorage value

    const goToSignUp = () => {
        navigate('/register');
    };

    return(
        <nav className="navbar">
            <ul>
                <li><Link to='/home' className="nav-link">Gym49</Link></li>
                {isAdmin && 
                    <li><Link to='admin/add-member' className="nav-link">Add Member</Link></li>
                }
                <li><Link to='/register' className="nav-link" id={` ${isAdmin ? 'sign-up' : 'sign-up2'}`}>SignUp</Link></li>
                
            </ul>
        </nav>
    );
}
