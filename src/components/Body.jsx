import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet/>
      {/* <MainContainer/> Outlet in place of MainContainer and WatchPage*/}
    </div>
  );
};

export default Body;
