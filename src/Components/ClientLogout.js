
import React,{ useState} from 'react'
import './AgentClient.css';
const ClientLogout = () => {
     const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogout = async () => { 
        console.log("email,phoneNumber,password", email, password, phoneNumber);
        let result = await fetch("https://crawford2u.onrender.com/client/clientlogout", {
            method: 'post',
            body: JSON.stringify({email,phoneNumber, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
    }

  return (
    <div>
      <div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Client Logout Form</h2>
       <form action="/agent/login" method="POST">
                  <div className="mb-1 data">
                <label for="EmailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" autocomplete="off"
                          onChange={(e) => setEmail(e.target.value)} value={ email} />
               </div>     
            <div className="mb-1 data">
                <label for="PhoneNumberId" className="form-label">
                    PhoneNumber: </label>
                      <input type="text" name="phoneNumber" class="form-control" id="phoneNumberId" autocomplete="off"
                    onChange={(e) => setPhoneNumber(e.target.value)} value={ phoneNumber}      />
            </div>
            <div className="mb-1 data">
                <label for="MpinId" className="form-label">
                    Password:</label>
                      <input type="text" name="mpin" className="form-control" id="mpinId" autocomplete="off"
                      onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
           
                  <button onClick={handleLogout}type="submit" name="submit" className="btn btn-primary button">
                Logout
            </button>
        </form>
    </div>
    </div>
  )
}

export default ClientLogout
