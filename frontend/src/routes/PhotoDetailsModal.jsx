import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ photo, closeModal, isFavorite, toggleFavorite, favoritePhotos }) => {
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
        <PhotoFavButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(photo.id)}
        />
      </div>
      <div className="photo-details-modal__images">
        <img
          src={photo.urls.full}
          alt="Full size photo"
          className="photo-details-modal__image"
        />
      </div>
      {photo.similar_photos && (
        <div className="photo-details-modal__similar-photos">
          <h3>Similar Photos</h3>
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            favoritePhotos={favoritePhotos}
            toggleFavorite={toggleFavorite}
            openModal={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
