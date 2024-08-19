import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";



const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(({ id, urls, user, location }) =>(
        <li key={id}>
          <PhotoListItem
            imageSource={urls.regular}
            profile={user.profile}
            username={user.username}
            location={location}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
