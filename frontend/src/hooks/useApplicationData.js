import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC"
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
  photoData: [],
  topicData: []
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload.photoId]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(
          (id) => id !== action.payload.photoId
        )
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: Array.isArray(action.payload) ? action.payload: []
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };

    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: Array.isArray(action.payload) ? action.payload: []
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModalOpen: true
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload:data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  useEffect(() =>{
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  const onLoadTopic = (photos, topics) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Photos fetched for topic:", data);
        if (Array.isArray(data)) {
          dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data });
        } else {
          console.error("Expected an array of photos, but got:", data);
        }
      })
      .catch((error) => console.error(`Error fetching photos for topic ${topicId}:`, error));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;