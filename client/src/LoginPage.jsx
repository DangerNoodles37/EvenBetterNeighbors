import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();
  // USE USE NAVIGTE INSTEAD OF HISTORY
  // const navigate = useNavigate()

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
    // make an axios post or get request to the URL connecting to auth stuff
    // .then, redirect to the landing page USING THE USENAVIGATE HOOK
  }

  function handleMerchantLogin() {
    // logic for merchants logging in should go here

    // axios({
    // })
  }

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
            <form className='userForm' onSubmit={handleUserLogin}>
              <div className='userLogin'>

                {/* USER EMAIL INPUT */}
                <label htmlFor='userEmailLogin' >Email: </label>
                <input type='text' name='userEmailLogin' id='userEmailLogin' />
                
                {/* <label htmlFor='userEmailLogin'>
                  Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    id='userEmailLogin'
                    value={userEmailLogin}
                    onChange={(event) =>
                      setUserEmailLogin(event.target.value)
                    }
                  />
                </label> */}

              </div>

              {/* USER PASSWORD INPUT */}
              <div className='userPW'>

                <label htmlFor='userPasswordLogin' >Email: </label>
                <input type='text' name='userPasswordLogin' id='userPasswordLogin' />

                {/* <label htmlFor='userPasswordLogin'>
                  Password:
                  <input
                    type='text'
                    id='userPasswordLogin'
                    value={userPasswordLogin}
                    onChange={(event) => {
                      setUserPasswordLogin(event.target.value);
                    }}
                  />
                </label> */}

              </div>
              <input id='formButton' type='submit' value='submit' />
            </form>
          </div>

          {/* MERCHANT LOGIN GOES HERE */}
          <div className='merchantLogin'>
            <div className='merchantAlignment'>
              <strong>Merchant</strong>
            </div>
            <br />
            <form className='merchantForm' onSubmit={handleMerchantLogin}>
              <div className='merchantUsername'>
                <label htmlFor='merchantUsernameLogin'>

                  Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  Password:
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
