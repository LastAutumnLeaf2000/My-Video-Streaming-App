import React, { Suspense, lazy, useEffect } from "react";
import ButtonList from "./ButtonList";
// import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import Shimmer from "./Shimmer";

const VideoContainer = lazy(() => import("./VideoContainer")); //Suspense fallback is Important

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div>
      <ButtonList />
      <Suspense fallback={<Shimmer />}>  {/*Gives Error without Suspense*/}
        <VideoContainer />
      </Suspense>
    </div>
  );
};

export default MainContainer;
