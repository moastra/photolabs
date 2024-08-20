import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'


const TopNavigation = ({topics, favoriteCount, onTopicClick}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick}/>
      <FavBadge isFavPhotoExist={favoriteCount > 0} favoriteCount={favoriteCount} />
    </div>
  )
}

export default TopNavigation;