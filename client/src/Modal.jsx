import React from 'react'
import styles from './Modal.modules.css'

// const Modal = (props) => {
const Modal = ({merchantData, modalId, setIsOpen}) => {
  console.log(merchantData)
  console.log(modalId)


  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h1 className={styles.heading}>{merchantData[modalId].storeName}</h1>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>X</button>
          <div className={styles.modalContent}>
            <a className={styles.address} href={`https://maps.google.com/?q=${merchantData[modalId].storeName} ${merchantData[modalId].address}`}>{merchantData[modalId].address}, {merchantData[modalId].zipCode}</a>
          </div>
          <div className={styles.modalContent}>
            {merchantData[modalId].description}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <div className={styles.modalContent}>
                Contact Us: {merchantData[modalId].email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal