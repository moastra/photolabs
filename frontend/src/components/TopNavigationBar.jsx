import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import topics from 'mocks/topics';
import '../styles/TopNavigationBar.scss'


const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={true} />
    </div>
  )
}

export default TopNavigation;