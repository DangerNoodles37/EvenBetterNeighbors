import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  // state for user values
  const [userEmailLogin, setUserEmailLogin] = useState('');
  const [userPasswordLogin, setUserPasswordLogin] = useState('');

  // state for merchant values
  const [merchantEmailLogin, setMerchantEmailLogin] = useState('');
  const [merchantPasswordLogin, setMerchantPasswordLogin] = useState('');

  function handleUserLogin() {
    // logic for users logging in should go here. 
    // currently redirects to landing page
    history.push('/landing')
  }

  function handleMerchantLogin() {
    // logic for merchants logging in should go here
  }
  return (
    <div>
      <NavBar />
      <div>
        <h2 className='login'>login</h2>
      </div>
      <div className='loginContainer'>
        {/* hold both user and merchant login */}
        <div className='consMerchContainer'>
          {/* user login */}
          <div className='userLogin'>
            <div className='userAlignment'>
              <strong>user</strong>
            </div>
            <br />

            <form className='userForm' onSubmit={handleUserLogin}>
              <div className='userLogin'>
                <label htmlFor='userEmailLogin'>
                  email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    id='userEmailLogin'
                    value={userEmailLogin}
                    onChange={(event) =>
                      setUserEmailLogin(event.target.value)
                    }
                  />
                </label>
              </div>

              <div className='userPW'>
                <label htmlFor='userPasswordLogin'>
                  password:
                  <input
                    type='text'
                    id='userPasswordLogin'
                    value={userPasswordLogin}
                    onChange={(event) => {
                      setUserPasswordLogin(event.target.value);
                    }}
                  />
                </label>
              </div>
              <input id='formButton' type='submit' value='submit' />
            </form>
          </div>
          {/* merchant login */}
          <div className='merchantLogin'>
            <div className='merchantAlignment'>
              <strong>merchant</strong>
            </div>
            <br />
            <form className='merchantForm' onSubmit={handleMerchantLogin}>
              <div className='merchantUsername'>
                <label htmlFor='merchantUsernameLogin'>

                  email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input 
                type='text' 
                id='merchantEmailLogin'
                value={merchantEmailLogin}
                onChange={(event) => {
                  setMerchantEmailLogin(event.target.value)
                }}
                />

                </label>
              </div>
              <div className='merchantPassword'>
                <label htmlFor='merchantPasswordLogin'>
                  password:
                  <input
                    type='text'
                    id='merchantPasswordLogin'
                    value={merchantPasswordLogin}
                    onChange={(event) => {
                      setMerchantPasswordLogin(event.target.value);
                    }}
                  />
                </label>
              </div>
              <input id='formButton' type='submit' value='submit' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
