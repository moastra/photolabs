import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({isFavorite, onClick}) => {
  return (
    <div
      className={`photo-list__fav-icon ${isFavorite ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;