import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favoriteCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
      {isFavPhotoExist && (
        <div className="fav-badge__count">
          <span>{favoriteCount}</span>
        </div>
      )}
    </div>
  ); 
};

export default FavBadge;