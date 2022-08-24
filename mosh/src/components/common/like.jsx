import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import LikeAllContext from "../likeAllContext.js";

const Like = ({ liked, toggleLikedIcon }) => {
  //* used context to pass an obj from grandparent just for practice
  const likeContext = useContext(LikeAllContext);
  if (likeContext.likeAllState) liked = likeContext;

  let likeIcon = (
    <FontAwesomeIcon cursor="pointer" icon={liked ? fullHeart : emptyHeart} />
  );

  return (
    <LikeAllContext.Consumer>
      {() => (
        <div cursor="pointer" onClick={toggleLikedIcon}>
          {likeIcon}
        </div>
      )}
    </LikeAllContext.Consumer>
  );
};

export default Like;
