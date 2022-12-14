import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function UserInformation({ dummyEmail }) {

  const [data, setData] = useState([]);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState(''); 
  const [userPassword, setUserPassword] = useState('');
  const [userZipCode, setUserZipCode] = useState('');
  const [userEmail, setUserEmail] = useState(''); 
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  function handleUpdateForm() {
   // logic to update user information goes here. the user is identified with an email passed in as params (since emails are unique) but can also be modified to take an id. the backend code is written to grab a key value pair (what property needs to be updated and with what value). It'll update just that value. 
  }

  // take you to search for merchants
  function handleImageOnClick() {
    history.push('/landing')
  }

  // deletes a user account
  function deleteAcct () {
    axios.delete(`http://localhost:3000/api/${data.email}`)
    .then(()=> {
      history.push('/')
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/${dummyEmail}`, {
    })
      .then((info) => {
       setData(info.data[0]);
       setLoaded(true);
      })
  }, []);          

  return (
    <div data-testid='userInformation'>
      <div>
        <NavBar />
      </div>
      {!loaded && <p>loading...</p>}
  {loaded && 
      <div className='userInformationContainer'>
        <div className='userInformationTextContainer'>
            <img id='userLogo' src = 'https://i.imgur.com/3KH1t8i.png'></img><br />
            <br />
           
          <form onSubmit={handleUpdateForm}>
            
            <label>
              First Name: {data.firstName}</label><div></div>
              <input className = 'firstNameLabel'
                type='text'
                name='username'
                value={userFirstName}
                onChange={(event) => setUserFirstName(event.target.value)}
              />
            <input id='formButton' type='submit' value='update' />
           
        
          </form>
          <form onSubmit={handleUpdateForm}>
            <label> 
              Last Name: {data.lastName} </label><div></div>
              <input className = 'lastNameLabel'
                type='text'
                name='password'
                value={userLastName}
                onChange={(event) => setUserLastName(event.target.value)}
              />
            <input id='formButton' type='submit' value='update' />
          </form>

          <form onSubmit={handleUpdateForm}>
            <label className = 'dummyEmailLabel'>
              Email: {dummyEmail} <div></div>
              <input 
                type='text'
                name='email'
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>

          <form onSubmit={handleUpdateForm}>
            <label className = 'passwordLabel'>
              Password: {data.password}  <div></div>
              <input 
                type='text'
                name='username'
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />
            </label>
            <input id='formButton' type='submit' value='update' />
          </form>
          <form onSubmit={handleUpdateForm}>
            <label className = 'zipCodeLabel'>
              Zip Code: {data.zipCode}  <div></div>
              <input 
                type='text'
                name='username'
                value={userZipCode}
                onChange={(event) => setUserZipCode(event.target.value)}
              />
            </label>

            <input id='formButton' type='submit' value='update' />
          </form>
          <br />
          <br />
          <div id='trashContainer'>
          <img onClick={deleteAcct} id = 'trash' src='https://i.imgur.com/kGXGseR.png'/>
          </div>
        </div>
      </div>}
      
      <br />
      <br />
      <br />
      <div className = 'buttonContainer'>
        <img onClick={handleImageOnClick} id ='navigateButton' src= "https://i.imgur.com/D10VJDJ.png" ></img>
      </div>
    </div>
  );
}

export default UserInformation;
