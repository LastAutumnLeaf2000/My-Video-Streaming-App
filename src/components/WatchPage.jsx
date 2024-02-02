import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v")); //gives the id of the video from the url..value of "v" from URL

  const id = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  // const fetchVideo = async ()=>{
  //   const data = await axios.get(SEARCH_API+id+GOOGLE_KEY2)
  //   // console.log(data.data.items[0])
  //   setvideo(data.data.items[0])
  // }

  return (
    <div className="flex flex-col">
    <div className="p-6">
      <iframe
      
        width="1040"
        height="520"
        src={"https://www.youtube.com/embed/" + id } //+"?autoplay=1" ?si=w9B0X_A6-ZvRkDkO
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
        allowFullScreen
      ></iframe>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
