import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = ({photos = [], favoritePhotos = [], toggleFavorite, openModal}) => {
  console.log("Photos Received in PhotoList", photos);
  return (
    <ul className="photo-list">
      {photos.map(( photo ) =>(
        <li key={photo.id}>
          <PhotoListItem
            photo={photo}
            isFavorite={favoritePhotos.includes(photo.id)}
            toggleFavorite={toggleFavorite}
            openModal={() => openModal(photo)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
