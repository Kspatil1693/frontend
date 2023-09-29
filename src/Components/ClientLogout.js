
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AgentClient.css';
const ClientLogout = () => {
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
        const response = await fetch("https://crawford-79w2.onrender.com/agent/logout", {
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
             window.alert("Logout Successfully");
          console.log("Successfully Logout");
           navigate('/clientRegister');
          
            
        }
    }

  return (
    <div>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Client Logout Form</h2>
       <form onSubmit={handleSubmit}>
                  <div className="mb-1 data">
                <label for="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" autocomplete="off"
                          onChange={handleInput} />
               </div>     
            <div className="mb-1 data">
                <label for="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
            <input type="text" name="phoneNumber" class="form-control" id="phoneNumberId" autocomplete="off"
              onChange={ handleInput} />
            </div>
            <div className="mb-1 data">
                <label for="MpinId" className="form-label">
                    Password:</label>
                      <input type="text" name="mpin" className="form-control" id="mpinId" autocomplete="off"
                      onChange={handleInput}/>
            </div>
           
                  <button type="submit" name="submit" className="btn btn-primary button">
                Logout
            </button>
        </form>
    </div>
    </div>
  )
}

export default ClientLogout
