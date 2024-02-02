import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //if(!isMenuOpen) return null //This pattern is called "Early Return"
  //OR
  return (
    <>
      {isMenuOpen && (
        <div className="w-48 p-5 shadow-2xl">
          <ul className="font-medium">
            <Link to="/">
              <li>🏠Home</li>
            </Link>
            <li>Shorts</li>
            <li>Subsciptions</li>
          </ul>
          <br />
          <ul className="font-medium">
            <li>Library</li>
            <li>History</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
          <br />

          <h1 className="font-bold">Subscriptions</h1>
          <ul>
            <li>Akshay Saini</li>
            <li>T-Series</li>
            <li>ICC</li>
            <li>Marvel Entertainment</li>
            <li>TED</li>
          </ul>
          <br />

          <h1 className="font-bold">Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion</li>
            <li>Beauty</li>
            <li>Podcast</li>
            <li>Playables</li>
          </ul>
          <br />
        </div>
      )}
    </>
  );
};

export default Sidebar;
