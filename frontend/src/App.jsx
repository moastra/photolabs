import React from 'react';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import TopicList from 'components/TopicList';
import TopicListItem from 'components/TopicListItem';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
    <TopicList/>
    <PhotoList/>
    </div>
  );
};

export default App;
