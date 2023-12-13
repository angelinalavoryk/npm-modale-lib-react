import React from 'react';
import './style/Modale.css';

const Modale = ({ showModal, closeModal, message }) => {
  return (
    <>
      {showModal === true && (
        <div className="modal">
          <div className="modal-content">
          <span>{message}</span>
          </div>
            <div className="modal-close-icon" onClick={closeModal}>
                <div className='close-emoji'>✕</div>
            </div>
        </div>
      )}
    </>
  );
};

export default Modale;