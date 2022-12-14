import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../public/styles.scss';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import CreateAcct from './CreateAcct';
import LandingPage from './LandingPage';
import Team from './Team';
import AboutUs from './AboutUs'; 
import UserInformation from './UserInformation'
import merchantData from './merchantData';

function App() {

  // Declare a state holding the users entered email in the highest component
    // This should not be stored in state as it doesn't persist upon refresh 
    // A better method to store the email would be in localStorage or cookies
    // You need the email or id (a unique identifier) so you know which information to show on the user information page 
      // Currently, the email gets stored in state upon creation of an account and using the email in state, the user information is populated. 
  const [defaultEmail, setDefaultEmail] = useState(''); 
  // get merchant data from database here
  const [needMerchantData, setNeedMerchantData] = useState(false)
  const [merchantDataState, setMerchantData] = useState(merchantData)
      // pass down the merchant data state

  function needMerchantDataSetter(needMerchantData) {
    if (needMerchantData === false) {
      setNeedMerchantData(true)
    }
    else { 
      setNeedMerchantData(false)
    }
  }


  // findOne session 

  // useEffect(() => {
  //   // axios get request to fetch all merchant data as an array object
  //   // axios({
  //   //   method: 'get',
  //   //   url: 'INSERT URL TO GET ALL MERCHANTS',
  //   // })
  //   //   .then((responseData) => {
  //   //     console.log('Merchants: ', responseData.data)
  //   //     setMerchantData(responseData.data)
  //   // })

  //   setMerchantData(merchantData)
  // }, [needMerchantData])
  // Routes defined below for pages 
  // Prop driling the props for email in User Information and Create Account
    // Should also be in login page but ran out of time 
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/loginPage'>
          <LoginPage needMerchantData={needMerchantData} setNeedMerchantData={setNeedMerchantData} />
        </Route>

        <Route path='/createAccount'>
          <CreateAcct defaultEmail={defaultEmail} setDefaultEmail={setDefaultEmail} />
        </Route>

        <Route path='/landing'>
          <LandingPage merchantData={merchantDataState}/>
        </Route>

        <Route path='/team'>
          <Team />
        </Route>

        <Route path='/aboutus'>
          <AboutUs />
        </Route>

        <Route path='/userinformation'>
          <UserInformation  defaultEmail={defaultEmail} setDefaultEmail={setDefaultEmail} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
