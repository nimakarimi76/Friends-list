import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

const Like = (props) => {
  let likeIcon = (
    <FontAwesomeIcon
      cursor="pointer"
      icon={props.liked ? fullHeart : emptyHeart}
    />
  );

  return (
    <div cursor="pointer" onClick={props.toggleLikedIcon}>
      {likeIcon}
    </div>
  );
};

export default Like;
