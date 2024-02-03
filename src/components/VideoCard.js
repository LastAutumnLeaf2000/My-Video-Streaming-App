import React from "react";

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-[21.3rem] lg:w-80 my-2 ml-4 shadow-lg rounded-lg cursor-pointer h-80 p-2">
      <div>
        <img
          src={thumbnails.medium.url}
          alt="thumbnail"
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold my-1">{title}</li>
          <li>{channelTitle}</li>
          <span>{(statistics.viewCount / 1000000).toFixed(1)} M views</span>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
