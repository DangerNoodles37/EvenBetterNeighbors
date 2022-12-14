import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CreateAcct({ setDefaultEmail, defaultEmail }) {
  const history = useHistory(); 

  const handleSetDefaultEmail = () => {
    event.preventDefault()
    
    console.log('Create User Button Clicked')
    setDefaultEmail(event.target[2].value)
  }
  // Spacing below was done using manual spacers. Should be done via divs in SCSS. 

  return (
    <div>
      <NavBar />
      <div>
        <h2 className='createAccount'>creating an account is easy</h2>
      </div>

      {/* hold both user and merchant login */}
      <div className='loginContainer'>
        <div className='consMerchContainer'>
          {/* user login */}
          <section className='formSection'>
            {/* header for user login */}
            <div className='userAlignment'>
              <strong>User</strong>
            </div>
            <br></br>

            {/* TEMPLATE HERE */}
              {/* <label htmlFor='firstName' >last name: </label>
              <input type='text' name='firstName' id='firstName'/> */}
            {/* TEMPLATE END HERE */}

            {/* form for user */}
            {/* ADD STYLING CLASSNAMES BACK IN LATER */}

           

            <form method='POST' action='http://localhost:3000/api/createUser'>
              <label htmlFor='firstName' >First Name: </label>
              <input type='text' name='firstName' id='firstName'/>
              <br />
              
              <label htmlFor='lastName' >Last Name: </label>
              <input type='text' name='lastName' id='lastName'/>
              <br />

              <label htmlFor='userEmail' >Email: </label>
              <input type='text' name='userEmail' id='userEmail'/>
              <br />

              <label htmlFor='userPassword' >Password: </label>
              {/* CHANGE TYPE TO PASSWORD ONCE DONE W TESTING AND DEVELOPMEN */}
              <input type='password' name='userPassword' id='userPassword'/>
              <br />

              <label htmlFor='userZipCode' >Zip Code: </label>
              <input type='text' name='userZipCode' id='userZipCode'/>
              <br />

              <input id='formButton' type='submit' value='submit' />
            </form>
          </section>

          {/* merchant login */}
          <div className='merchantLogin'>
            {/* header for user login */}
            <div className='merchantAlignment'>
              <strong>Merchant</strong>
            </div>
            <br></br>

            <form method='POST' action='http://localhost:3000/createMerchant'>
              <label htmlFor='businessEmail' >Email: </label>
              <input type='text' name='businessEmail' id='businessEmail'/>
              <br />

              <label htmlFor='merchantPassword' >Password: </label>
              {/* CHANGE TYPE TO PASSWORD AFTER TESING AND DEVELOPMEN */}
              <input type='password' name='merchantPassword' id='merchantPassword'/>
              <br />

              <label htmlFor='businessName' >Business Name: </label>
              <input type='text' name='businessName' id='businessName'/>
              <br />

              <label htmlFor='typeOfBusiness' >Business Type: </label>
              <input type='text' name='typeOfBusiness' id='typeOfBusiness'/>
              <br />

              <label htmlFor='businessAddress' > Address: </label>
              <input type='text' name='businessAddress' id='businessAddress'/>
              <br />

              <label htmlFor='businessZipCode' >Zip Code: </label>
              <input type='text' name='businessZipCode' id='businessZipCode'/>
              <br />

              <label htmlFor='description' >Description: </label>
              <input type='text' name='description' id='description'/>
              <br />

              <label htmlFor='image' >Image: </label>
              <input type='text' name='image' id='image' />

              <br />
              <input id='formButton' type='submit' value='submit' />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateAcct;
