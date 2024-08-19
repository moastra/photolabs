import React, {useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';



const HomeRoute = ({ photos, topics}) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoriteCount={favoritePhotos.length} />
      <PhotoList 
      photos={photos}
      favoritePhotos={favoritePhotos}
      toggleFavorite={toggleFavorite}
       />
    </div>
  );
};

export default HomeRoute;
