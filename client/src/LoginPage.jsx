import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function LoginPage(props) {
  const history = useHistory();

  const handleLogin = () => {
    // event.preventDefault();
    console.log('hi from the login button');
    // props.setNeedMerchantData(props.needMerchantData)
  };

  return (
    <div>
      <NavBar />
      <div>
        <h2 className='login'>Login</h2>
      </div>
      <div className='loginContainer'>
        {/* hold both user and merchant login */}

        <div className='consMerchContainer'>
          {/* user login */}
          <div className='userLogin'>
            <div className='userAlignment'>
              <strong>User</strong>
            </div>
            <br />
            {/* USER LOGIN FORM GOES HERE */}

            <div className='innerAlign'>
              <form
                onSubmit={handleLogin}
                className='userForm'
                method='post'
                action='http://localhost:3000/userLogin'
              >
                {/* <form className='userForm' onSubmit={handleUserLogin}*/}
                <div className='userLogin'>
                  {/* USER EMAIL INPUT */}
                  <label htmlFor='email'>Email: </label>
                  <input type='text' name='email' id='email' />
                </div>
                {/* USER PASSWORD INPUT */}
                <div className='userPW'>
                  <label htmlFor='password'>Password: </label>
                  <input type='password' name='password' id='password' />
                </div>
                <input
                  name='userSubmit'
                  id='formButton'
                  type='submit'
                  value='submit'
                />
              </form>
            </div>
          </div>

          {/* MERCHANT LOGIN GOES HERE */}
          <div className='merchantLogin'>
            <div className='merchantAlignment'>
              <strong>Merchant</strong>
            </div>
            <br />
            <div className='innerAlign'>
              <form
                onSubmit={handleLogin}
                className='merchantForm'
                method='post'
                action='http://localhost:3000/merchantLogin'
              >
                {/* MERCHANT EMAIL LOGIN */}
                <div className='merchantUsername'>
                  <label htmlFor='memail'>Email: </label>
                  <input type='text' name='memail' id='memail' />

                  {/* <label htmlFor='merchantUsernameLogin'>
                  Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input 
                type='text' 
                id='merchantEmailLogin'
                value={merchantEmailLogin}
                onChange={(event) => {
                  setMerchantEmailLogin(event.target.value)
                }}
                />
                </label> */}
                </div>

                {/* MERCHANT PASSWORD LOGIN */}
                <div className='merchantPassword'>
                  <label htmlFor='mpassword'>Password: </label>
                  <input type='password' name='mpassword' id='mpassword' />

                  {/* <label htmlFor='merchantPasswordLogin'>
                  Password:
                  <input
                    type='text'
                    id='merchantPasswordLogin'
                    value={merchantPasswordLogin}
                    onChange={(event) => {
                      setMerchantPasswordLogin(event.target.value);
                    }}
                  />
                </label> */}
                </div>

                <input id='merchantFormButton' type='submit' value='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
