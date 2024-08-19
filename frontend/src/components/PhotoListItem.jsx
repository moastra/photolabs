import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ imageSource, profile, username, location }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div className="photo-list__user-name">{username}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

