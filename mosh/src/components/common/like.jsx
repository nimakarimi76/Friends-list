import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const Like = ({ liked, toggleLikedIcon }) => {
  let likeIcon = (
    <FontAwesomeIcon cursor="pointer" icon={liked ? fullHeart : emptyHeart} />
  );

  return (
    <div cursor="pointer" onClick={toggleLikedIcon}>
      {likeIcon}
    </div>
  );
};

export default Like;
