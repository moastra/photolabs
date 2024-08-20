import React, {useState} from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailModal
  } = useApplicationData();

  return (
    <div className="App">
    <HomeRoute
      photos={state.photoData}
      topics={state.topicData}
      openModal={onPhotoSelect}
      toggleFavorite={updateToFavPhotoIds}
      favoritePhotos={state.favoritePhotos}
      onLoadTopic={onLoadTopic}
    />
    {state.isModalOpen && state.selectedPhoto && (
      <PhotoDetailsModal
        photo={state.selectedPhoto}
        closeModal={onClosePhotoDetailModal}
        isFavorite={state.favoritePhotos.includes(state.selectedPhoto.id)}
        toggleFavorite={updateToFavPhotoIds}
        favoritePhotos={state.favoritePhotos}
      />
    )}
    </div>
  );
};

export default App;
