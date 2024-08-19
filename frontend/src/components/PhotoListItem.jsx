import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavorite, toggleFavorite, openModal }) => {
  const handleFavButtonClick = (event) => {
    event.stopPropagation();
    toggleFavorite(photo.id);
  };

  return (
    <div className="photo-list__item" onClick={openModal}>
      <PhotoFavButton 
      isFavorite={isFavorite}
      onClick={handleFavButtonClick}
      />
      <img src={photo.urls.regular} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div className="photo-list__user-name">{photo.user.username}</div>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

