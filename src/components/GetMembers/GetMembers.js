import React, {useState, useEffect} from "react";
import axios from "axios";
import './GetMembers.css'
import { useNavigate } from "react-router-dom";
import bg_img from "../Home/Images/gym_bg.webp"
import { Link } from "react-router-dom";

export default function GetMembers()
{
    var [members, setMembers] = useState([]);
    var navigate = useNavigate();

    function formatDate(date) {
        
        if (!date) return "N/A"; 
    
        const formattedDate = new Date(date);
    
        const day = formattedDate.getDate().toString().padStart(2, '0');
        const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
        const year = formattedDate.getFullYear();
    
        return `${month}/${day}/${year}`;
    }

    useEffect(()=>{
        axios.get("https://localhost:7999/api/Member")
        .then(function(res){
            console.log(res.data);
            setMembers(res.data)
        }).catch(function(err){
            console.log(err);
        })
    },[])


    function handleDelete(memberId) {
        const confimed = window.confirm("Are you sure you want to delete this member?")
        if (confimed) {
            axios.delete(`https://localhost:7999/api/Member?memberId=${memberId}`)
                .then(res => {
                    console.log(res.data);
                    alert("Member deleted successfully");
                    setMembers(members.filter(member => member.memberId !== memberId));
                })
                .catch(err => {
                    console.error('Error deleting member:', err);
                    alert("Error deleting the member");
                });
        }
    }

    return(
        <div className="get-member-page" id="members-container">
            <img src={bg_img} className="img-bg"/> 
            {members.map((member,index) => (
                <div key={index} className="member-card">
                <div className="ne-details">
                    <p>Name: <b>{member.name}</b></p>
                    <p>Email: <b>{member.email}</b></p>
                </div>
                <div className="me-details">
                    <p>Membership Expiry: <b>{formatDate(member.membershipExpiry)}</b></p>
                    <p>DOJ: <b>{formatDate(member.doj)}</b></p>
                </div>
                <div className="pb-details">
                    <p>Contact: <b>{member.phone}</b></p>
                    <br/>
                </div>
                 <div className="btn-container">
                    <Link to={`/admin/edit/${member.memberId}`} className="btn" id="edit-link">Edit</Link>
                    <div className="btn2" onClick={() => handleDelete(member.memberId)}>Delete</div>
                </div>
            </div>
            ))}
        </div>
    )
}