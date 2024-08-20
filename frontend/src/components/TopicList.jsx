import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({topics = [], onTopicClick}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({id, title}) => (
        <TopicListItem
          key={id} 
          label={title}
          onClick={() => onTopicClick(id)}
        />
      ))}
    </div>
  );
};

export default TopicList;
