import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";
import "../styles/TopicList.scss";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(({id, title}) => (
        <TopicListItem key={id} label={title} />
      ))}
    </div>
  );
};

export default TopicList;
