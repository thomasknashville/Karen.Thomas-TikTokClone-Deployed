import React, { useState } from "react";
import "./VideoSidebar.css";
import { FaShareAlt } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <GrFavorite fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <MdFavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <SiGooglemessages fontSize="large" />

        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <FaShareAlt fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
