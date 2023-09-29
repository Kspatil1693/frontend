import React, { useState } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import './AgentClient.css';

const AgentLogin = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        phoneNumber: '',
        mpin:''
    });
    const handleInput = (event) => { 
        setData({...data,[event.target.name]:event.target.value})
    }
    const handleSubmit = async (e) => { 
        e.preventDefault();
        const { email, phoneNumber, mpin } = data;
        const response = await fetch("https://crawford-79w2.onrender.com/agent/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                phoneNumber: phoneNumber,
                mpin:mpin
            })
        });
        const result = await response.json();
        if (result.status === 422 || !data) {
            window.alert("Inavalid Login");
            console.log("Inavalid Login");
        }
        else { 
             window.alert("Login Successfully");
          console.log("Successfully Login");
           navigate('/agentLogout');
          
            
        }
    }
    
  return (
    <div>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Agent Login Form</h2>
       <form onSubmit={handleSubmit}>
             <div className="mb-1 data">
                <label htmlFor="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off"
                      onChange={handleInput}/>
            </div>     
            <div className="mb-1 data">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" //autocomplete="off"
                onChange={handleInput} />
            </div>
            <div className="mb-1 data">
                <label htmlFor="password1Id" className="form-label">
                    Password:</label>
                      <input type="password" name="mpin" className="form-control" id="password1Id" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
           <br/><br/>
                <button type="submit" name="submit" className="btn btn-primary button">
                Login
                  </button><br/><br/>
          <p>Create new account and  register here ...</p>
           <NavLink to="/agentRegister"> Register</NavLink>
        </form>
    </div>
    </div>
  )
}

export default AgentLogin
