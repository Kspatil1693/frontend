import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ClientRegister = () => {
  
    const [data, setData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        whatsAppNumber: '',
        alternativeNumber: '',
        password1:'',
        adharCard: '',
        panCard: '',
        buildingName: '',
        flatNumber: '',
        streetName: '',
        pinCode: '',
    
    })
    const handleInput = (event) => { 
        setData({ ...data, [event.target.name]: event.target.value })
  }
  

/*function handleSubmit(event) { 
        event.preventDefault()
        console.log("all data......", data);
        axios.post('http://localhost:5050/agent/register', { data })
            .then(response => console.log(response))
        .catch(err=>console.log(err))
    }*/
    const handleSubmit = async (e) => { 
        e.preventDefault();
        const { firstName, middleName, lastName,
            phoneNumber, whatsAppNumber, alternativeNumber,
            email,password1, adharCard, panCard, buildingName, flatNumber,
            streetName, pinCode } = data;
        
        const response = await fetch("https://crawford2u.onrender.com/client/clientregister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                whatsAppNumber: whatsAppNumber,
                alternativeNumber: alternativeNumber,
                email: email,
                password1:password1,
                adharCard: adharCard,
                panCard: panCard,
                buildingName: buildingName,
                flatNumber: flatNumber,
                streetName: streetName,
                pinCode: pinCode,
                          })
        });
        const result = await response.json();

        if (result.status === 422 || !data) {
            window.alert("Inavalid Registeration");
            console.log("Inavalid Registration");
        }
        else { 
             window.alert("Registeration Successfully");
            console.log("Successfully Registration");
            
      }
      await response.send("/agentLogin");
    }

  return (
    <div>
      
      <div className="container mt-3 shadow-lg p-3" >
        <h2 className="text-center">Client Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-1 register">
                  <label htmlFor="MiddleNameId" className="form-label">
                    FirstName</label>
                      <input type="text" name="firstName" className="form-control" id="FirstNameId" //autocomplete="off"
                          onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="MiddleNameId" className="form-label">
                    MiddleName</label>
                      <input type="text" name="middleName" className="form-control" id="MiddleNameId" //autocomplete="off"
                          onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="LastNameId" className="form-label">
                    LastName </label>
                      <input type="text" name="lastName" className="form-control" id="LastNameId" //autocomplete="off"
                           onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="PhoneNumberId" className="form-label">
                    PhoneNumber</label>
                      <input type="text" name="phoneNumber" className="form-control" id="phoneNumber"//autocomplete="off"
                    onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="whatsAppNumberId" className="form-label">
                    WhatsAppNumber </label>
                      <input type="text" name="whatsAppNumber" className="form-control" id="whatsAppNumberId" //autocomplete="off"
                     onChange={handleInput }/>
                  </div>
                  <div className="mb-1 register">
                <label htmlFor="AlternativeNumberId" className="form-label">
                    AlternativeNumber </label>
                      <input type="text" name="alternativeNumber" className="form-control" id="alternativeNumberId" //autocomplete="off"
                           onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="EmailId" className="form-label">
                    Email</label>
                      <input type="text" name="email" className="form-control" id="EmailId" //autoComplete='off'
                 onChange={handleInput }/>
                  </div>
                  <div className="mb-1 register">
                <label htmlFor="Password1Id" className="form-label">
                    Password</label>
                      <input type="password" name="password1" className="form-control" id="password1Id" //autoComplete='off'
                 onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="adharCardId" className="form-label">
                    AdharCard</label>
                      <input type="text" name="adharCard" className="form-control" id="adharCardId" //autoComplete='off'
                 onChange={handleInput }/>
                  </div>
                   <div className="mb-1 register">
                <label htmlFor="panCardId" className="form-label">
                    PanCard</label>
                      <input type="text" name="panCard" className="form-control" id="panCardId" //autoComplete='off'
                           onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="buildingNameId" className="form-label">
                    BuildingName</label>
                      <input type="text" name="buildingName" className="form-control" id="buildingNameId" 
                      onChange={handleInput }/>
                  </div>
                   <div className="mb-1 register">
                <label htmlFor="flatNumber" className="form-label">
                    FlatNumber</label>
                      <input type="text" name="flatNumber" className="form-control" id="flatNumberId"
                 onChange={handleInput }/>
            </div>
            <div className="mb-1 register">
                <label htmlFor="streetNameId" className="form-label">
                    StreetName</label>
                      <input type="text" name="streetName" className="form-control" id="streetNameId" //autocomplete="off"
                       onChange={handleInput } />
            </div>
            <div className="mb-1 register">
                <label htmlFor="PincodeId" className="form-label">
                    Pincode</label>
                      <input type="text" name="pinCode" className="form-control" id="PincodeId" //autocomplete="off"
                       onChange={handleInput }/>
                  </div>
                  
           <br/><br/>
            <button type="submit" name="submit" className="btn btn-primary button">
            Register
          </button>
          <p>I am already register here...</p>
           <NavLink to="/agentLogin"> Login</NavLink>
        </form>
          </div>
          
    </div>
  )

}

export default ClientRegister
