import React from 'react';
import styles from './Modal.modules.css';

// merchantEmail
//
// merchantPassword
//
// merchantName
//
// typeOfMerchant
//
// merchantAddress
//
// merchantZipCode
//
// description
//
// image
// "https://en.wiktionary.org/wiki/File:Cirila-%D0%9C-majuskla.svg"

// const Modal = (props) => {
const Modal = ({ merchantData, modalId, setIsOpen }) => {
  console.log(merchantData);
  console.log(modalId);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h1 className={styles.heading}>
              {merchantData[modalId].merchantName}
            </h1>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={styles.modalContent}>
            <a
              className={styles.address}
              href={`https://maps.google.com/?q=${merchantData[modalId].merchantName} ${merchantData[modalId].merchantAddress}`}
            >
              {merchantData[modalId].merchantAddress},{' '}
              {merchantData[modalId].merchantZipCode}
            </a>
          </div>
          <div className={styles.modalContent}>
            {merchantData[modalId].description}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <div className={styles.modalContent}>
                Contact Us: {merchantData[modalId].merchantEmail}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
