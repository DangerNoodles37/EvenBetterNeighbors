import React, { useState } from 'react';
import Modal from './Modal';
// On load, merchant cards will load all merchants regardless of zip code.
// When the value in the search field if changed to a string with five characters (the length of zip codes in the US), it will filter through the merchant data, returning only the merchants matching that zip code.

// the merchant cards are populated with their merchant Id so you can implement modals to load the rest of their data. on click with modals.
// ran out of time before implementing it
function MerchantCards(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  console.log('MERCHANT CARDS props', props);
  // const [modalIsOpen, setIsOpen] = useState(false);

  let filteredData = props.merchantData;
  // GET MERCHANT DATA FROM DATABASE
  if (props.searchZipcode.length === 5) {
    filteredData = props.merchantData.filter(
      (el) => el.zipCode === props.searchZipcode
    );
  }

  function openModal(e) {
    event.preventDefault();
    // console.log('hello from IMAGEEEE');
    // // grab the current target id of the image clicked, and do string magic to get rid of merchantImage text, leaving only the index number. convert that number to string and now have access to props info via index
    // const currentElemId = e.currentTarget.value;
    // console.log(currentElemId);
  }

  // console.log('MERCHANT CARDS FILTERED DATA:', filteredData);

  return (
    <>
      {/*  conditional rendering */}
      {filteredData.map((data, index) => {
        console.log('THIS IS DATA:', data);
        const merchantImg = data.image;
        const merchantId = data._id;
        const newIndex = index * 100;
        return (
          <div>
            <section className='cardWrapper'>
              <article key={merchantId} className='eachMerchantImage'>
                <img
                  key={newIndex}
                  src={merchantImg}
                  id={`merchantImage${index}`}
                  role='button'
                  onClick={(e) => {
                    setModalId(index);
                    setIsOpen(true);
                    openModal(e);
                  }}
                />
                {/* <input type='image' src={merchantImg} onClick={openModal} /> */}
              </article>
            </section>
          </div>
        );
      })}
      {modalIsOpen && (
        <Modal
          modalId={modalId}
          merchantData={filteredData}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}

export default MerchantCards;
