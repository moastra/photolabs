import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = ({photos, favoritePhotos, toggleFavorite}) => {
  return (
    <ul className="photo-list">
      {photos.map(( photo ) =>(
        <li key={photo.id}>
          <PhotoListItem
            photo={photo}
            isFavorite={favoritePhotos.includes(photo.id)}
            toggleFavorite={toggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
