import React, { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteText } from "../utils/searchTextSlice";

const VideoContainer = () => {
  const dispatch = useDispatch()
  const text = useSelector(store=>store.text.text)
  console.log(text)

  const [videos, setvideos] = useState(null);
  const [allVideosToSearch, setallVideosToSearch] = useState(null);

  useEffect(() => {
    console.log("useState")
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await axios.get(YOUTUBE_VIDEO_API);
      setallVideosToSearch(data.data.items)
      setvideos(data.data.items);
  };
  

  if(text){
    let searchedVideo = allVideosToSearch.filter((video)=>video?.snippet?.title.toLowerCase().includes(text.toLowerCase()))
    setvideos(searchedVideo)
     dispatch(deleteText())
  }

  if(text=="All"){ //shows all videos if user clicks on All button
    setvideos(allVideosToSearch)
  }
  
  
  if (videos == null) return <div><Shimmer/></div>;

  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => {
        return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard video={video} /></Link>;
      })}
    </div>
  );
};

export default VideoContainer;
