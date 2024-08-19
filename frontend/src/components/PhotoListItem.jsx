import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ imageSource, profile, username, location}) => {
  return (
    <div className="photoListItem">
      <img src={imageSource} alt="Photo" className="photo-image" />
      <img src={profile} alt="Profile" className="profile-image" />
      <div className="username">{username}</div>
      <div className="photo-location">
        {location.city}, {location.country}
      </div>
    </div>
  );
};

export default PhotoListItem;
