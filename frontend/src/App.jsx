import React, {useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';





// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <div className="App">
    <HomeRoute
      photos={photos}
      topics={topics}
      openModal={openModal}
      toggleFavorite={toggleFavorite}
      favoritePhotos={favoritePhotos}
    />
    {isModalOpen && selectedPhoto && (
      <PhotoDetailsModal
        photo={selectedPhoto}
        closeModal={closeModal}
        isFavorite={favoritePhotos.includes(selectedPhoto.id)}
        toggleFavorite={toggleFavorite}
      />
    )}
    </div>
  );
};

export default App;
