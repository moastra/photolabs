import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';



const HomeRoute = ({ photos, topics, openModal, favoritePhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoriteCount={favoritePhotos.length} />
      <PhotoList 
      photos={photos}
      favoritePhotos={favoritePhotos}
      toggleFavorite={toggleFavorite}
      openModal={openModal}
       />
    </div>
  );
};

export default HomeRoute;
