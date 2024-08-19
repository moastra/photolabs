import { useState } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    isModalOpen: false,
    selectedPhoto: null,
    favoritePhotos: [],
    photos: photos,
    topics: topics
  });

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => ({
      ...prev,
      favoritePhotos: prev.favoritePhotos.includes(photoId)
        ? prev.favoritePhotos.filter((id) => id !== photoId)
        : [...prev.favoritePhotos, photoId]
    }));
  };

  const onPhotoSelect = (photo) => {
    console.log("Photo selected:", photo);
    setState((prev) => ({
      ...prev,
      selectedPhotos: photo,
      isModalOpen: true
    }));
  };

  const onClosePhotoDetailModal = () => {
    setState((prev) => ({
      ...prev,
      isModalOpen: false,
      selectedPhoto: null
    }));
  };

  const onLoadTopic = (photos, topics) => {
    setState((prev) => ({
      ...prev,
      photos,
      topics
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailModal
  };
};

export default useApplicationData;