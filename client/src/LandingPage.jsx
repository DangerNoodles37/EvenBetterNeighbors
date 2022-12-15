import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MerchantCards from './merchantCards';
import axios from 'axios';

// Imported mock data from MerchantCards.jsx
// Created a form and button to search for merchants by zip codes.
function LandingPage(props) {
  // use effect here to fetch data

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/allMerchants',
    }).then((responseData) => {
      console.log(' All Merchants: ', responseData.data);
      props.setMerchantData(responseData.data);
    });
  }, []);

  console.log('LANDING PAGE props: ', props);
  const [searchZipcode, setSearchZipcode] = useState('');

  return (
    <div className='landingPage'>
      <NavBar />

      <div className='searchBar'>
        <form>
          <label>
            Zip Code:
            <input
              type='text'
              name='searchZipcode'
              value={searchZipcode}
              onChange={(event) => {
                setSearchZipcode(event.target.value);
              }}
            />
          </label>
        </form>
      </div>
      <section className='merchantWrapper'>
        <MerchantCards
          merchantData={props.merchantData}
          searchZipcode={searchZipcode}
        />
      </section>
    </div>
  );
}

export default LandingPage;
