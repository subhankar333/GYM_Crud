import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './AddMember.css';
import bg_img from '../Home/Images/gym_bg.webp'


export default function AddMember(){
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [phone, setPhone] = useState("");
    var [expiry, setExpiry] = useState();
    var [doj, setDoj] = useState();

    var navigate = useNavigate();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const minDateTime = currentDate.toISOString().slice(0, 16);


    var user = {};

    function add(e)
    {
        e.preventDefault();

        user.name = name;
        user.email = email;
        user.phone = phone;
        user.expiry = expiry;
        user.doj = doj;

        var RequestOption = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
          }
      
          fetch("https://localhost:7999/api/Member/AddMember", RequestOption)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            alert("Member added successfully")
          })
          .catch(err => {
            console.log(err)
            alert("Error adding the member")
          })
    }
   

    return(
        <div className="add-member-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container">
                <h2>Add Member</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry">Membership Expiry</label>
                        <input type="datetime-local" id="expiry" name="expiry" value={expiry} min={minDateTime} onChange={(e) => setExpiry(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="doj">DOJ</label>
                        <input type="datetime-local" id="doj" name="doj" min={minDateTime} value={doj} onChange={(e) => setDoj(e.target.value)} />
                    </div>
                    <button type="submit" onClick={add}>Add</button>
                </form>
            </div>
        </div>
    )
}