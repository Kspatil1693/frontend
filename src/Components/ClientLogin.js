import React from 'react'

const ClientLogin = () => {

    
  return (
    <div>
<div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Client Login Form</h2>
              <form action="/client/login" method="POST">
             <div className="mb-1 data">
                <label for="emailId" className="form-label">
                    Email: </label>
                <input type="text" name="email" className="form-control" id="emailId" autocomplete="off" />
            </div>
            <div class="mb-1 data">
                <label for="PhoneNumberId" className="form-label">
                    PhoneNumbe: </label>
                <input type="text" name="phoneNumber" className="form-control" id="phoneNumberId" autocomplete="off" />
            </div>
            <div className="mb-1 data">
                <label for="MpinId" className="form-label">
                    Password:</label>
                <input type="text" name="mpin" className="form-control" id="mpinId" autocomplete="off" />
            </div>
           
                <button type="submit" name="submit" className="btn btn-primary button">
                Login
            </button>
        </form>
    </div>
    </div>
  )
}

export default ClientLogin
