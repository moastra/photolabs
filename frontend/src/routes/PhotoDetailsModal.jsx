import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={photo.user.username}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div className="username">{photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__images">
        <img
          src={photo.urls.full}
          alt="Full size photo"
          className="photo-details-modal__image"
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
