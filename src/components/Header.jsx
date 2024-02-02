import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import axios from "axios";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import { addToCache } from "../utils/searchSlice";
import { addText } from "../utils/searchTextSlice";

const Header = () => {
  const [searchQuerry, setsearchQuerry] = useState("");
  const [suggestions, setsuggestions] = useState(null);
  const [showSuggestions, setshowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const getCache = useSelector((store) => store.search);
  // {i: Array(10), in: Array(10), ind: Array(10), indi: Array(10), india: Array(10)}

  //console.log(getCache);

  useEffect(() => {
    if(searchQuerry){//doesnt do setTimeout() if searchbox empty
    const timer = setTimeout(() => {
      if (getCache[searchQuerry]) {//checks whether getCache has searchQuerry or not
        setsuggestions(getCache[searchQuerry]);
      } else {
        fetchSearch();
      }

      return () => clearTimeout(timer); //runs when the component unmounts
    }, 1000);
  }
  }, [searchQuerry]);

  const fetchSearch = async () => {
    const json = await axios.get(YOUTUBE_VIDEO_SEARCH_API + searchQuerry);
    //console.log(json.data[1])//search results
    setsuggestions(json.data[1]);

    dispatch(addToCache({ [searchQuerry] : suggestions }));
  };

  const suggestionsClicked = (e)=>{
    setsearchQuerry(e.target.innerText.slice(2))
    onButtonClick()
  }
  const onButtonClick=()=>{
    dispatch(addText(searchQuerry))
    setsearchQuerry("")
  }

  return (
    <div className="sticky top-0 bg-white" >
      <div className="shadow-lg grid grid-flow-col" >
        <div className="flex col-span-1 justify-evenly ">
          <img
            src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-21.jpg"
            alt="menu"
            className="w-12 p-1 cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          />
          <Link to="/">
            <img src="img.png" alt="Logo" className="w-14" />
          </Link>
        </div>
        <div className="col-span-10 text-center my-auto" >
          <form onSubmit={(e)=>e.preventDefault()}>
            <input
              type="text"
              value={searchQuerry}
              onChange={(e) => setsearchQuerry(e.target.value)}
              onFocus={() => setshowSuggestions(true)}
              // onBlur={() => setshowSuggestions(false)}
              className="w-1/2 border border-gray-400 rounded-l-full p-1 px-4"
            />
            <button className="px-2 border border-gray-400 bg-gray-100 rounded-r-full py-1
            " onClick={()=>onButtonClick()}>
              🔍
            </button>
          </form>
          {showSuggestions && searchQuerry ? (
            <div className="absolute left-[29.6rem] mt-1 bg-white shadow-xl w-[37rem] text-start rounded-xl overflow-hidden border border-gray-100" >
              <ul className="my-2" >
                {suggestions?.map((data, i) => (
                  <li key={i} className="cursor-default hover:bg-gray-400 p-2 z-50" onClick={(e)=>suggestionsClicked(e)} onFocus={() => setshowSuggestions(true)}>
                    🔍{data}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="col-span-1  m-auto">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            alt="menu"
            className="w-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
