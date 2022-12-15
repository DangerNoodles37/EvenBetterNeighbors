import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function CreateAcct({ setDefaultEmail, defaultEmail }) {
  const history = useHistory();

  const handleSetDefaultEmail = () => {
    event.preventDefault();

    console.log('Create User Button Clicked');
    // setDefaultEmail(event.target[2].value)
  };
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
<div className='innerAlign'>
            <form method='POST' action='http://localhost:3000/createUser'>
              <label htmlFor='firstName'>First Name: </label>
              <input type='text' name='firstName' id='firstName' />
              <br />

              <label htmlFor='lastName'>Last Name: </label>
              <input type='text' name='lastName' id='lastName' />
              <br />

              <label htmlFor='email'>Email: </label>
              <input type='text' name='email' id='email' />
              <br />

              <label htmlFor='password'>Password: </label>
              {/* CHANGE TYPE TO PASSWORD ONCE DONE W TESTING AND DEVELOPMEN */}
              <input type='password' name='password' id='password' />
              <br />

              <label htmlFor='zipCode'>Zip Code: </label>
              <input type='text' name='zipCode' id='zipCode' />
              <br />

              <input id='formButton' type='submit' value='submit' />
            </form>
            </div>
          </section>

          {/* merchant accoutn creation */}
          {/* merchantEmail,
          merchantPassword,
          merchantName,
          typeOfMerchant,
          merchantAddress,
          merchantZipCode,
          description,
          image, */}

          <div className='merchantLogin'>
            {/* header for user login */}
            <div className='merchantAlignment'>
              <strong>Merchant</strong>
            </div>
            <br></br>
<div className='innerAlign'>
            <form method='post' action='http://localhost:3000/createMerchant'>
              <label htmlFor='merchantEmail'>Email: </label>
              <input type='text' name='merchantEmail' id='merchantEmail' />
              <br />

              <label htmlFor='merchantPassword'>Password: </label>
              {/* CHANGE TYPE TO PASSWORD AFTER TESING AND DEVELOPMEN */}
              <input
                type='password'
                name='merchantPassword'
                id='merchantPassword'
              />
              <br />

              <label htmlFor='merchantName'>Business Name: </label>
              <input type='text' name='merchantName' id='merchantName' />
              <br />

              <label htmlFor='typeOfMerchant'>Business Type: </label>
              <input type='text' name='typeOfMerchant' id='typeOfMerchant' />
              <br />

              <label htmlFor='merchantAddress'> Address: </label>
              <input type='text' name='merchantAddress' id='merchantAddress' />
              <br />

              <label htmlFor='merchantZipCode'>Zip Code: </label>
              <input type='text' name='merchantZipCode' id='merchantZipCode' />
              <br />

              <label htmlFor='description'>Description: </label>
              <input type='text' name='description' id='description' />
              <br />

              <label htmlFor='image'>Image: </label>
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
    </div>
  );
}
export default CreateAcct;
