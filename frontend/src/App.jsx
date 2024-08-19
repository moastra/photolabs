import React from 'react';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {sampleDataForPhotoListItem.map(({ id, imageSource, profile, username, location }) => (
        <PhotoListItem
        key={id}
        imageSource={imageSource}
        profile={profile}
        username={username}
        location={location}
        />
      ))} */}
    <PhotoList/>
    </div>
  );
};

export default App;
