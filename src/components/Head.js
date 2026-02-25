import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheSearch } from "../utils/SearchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSearchResults(searchCache[searchQuery]);
      } else {
        getListOfSearchResults();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getListOfSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSearchResults(json[1]);
    dispatch(cacheSearch({ [searchQuery]: json[1] }));
  };
  const handleSuggestionClick = (value) => {
    setSearchQuery(value); // set input value
    setShowSearchResults(false); // close dropdown
    navigate(`/results?search_query=${value}`);
  };
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            onClick={() => handleToggleMenu()}
            className="h-7 cursor-pointer hover:opacity-70 transition"
            src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            alt="menu"
          />
          <a href="/" className="flex items-center">
            <img
              className="h-8 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCH5-in_dqv629DKigoHp7vyRZzOQrezE3w&s"
              alt="logo"
            />
          </a>
        </div>

        {/* Center Search Section */}
        <div className="relative flex-1 flex justify-center px-10">
          <div className="flex w-full max-w-2xl">
            <input
              className="flex-1 border border-gray-300 px-5 py-2 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSearchResults(true)}
            />
            <button className="border border-l-0 border-gray-300 px-6 bg-gray-100 hover:bg-gray-200 rounded-r-full transition">
              🔍
            </button>
          </div>

          {showSearchResults && (
            <div className="absolute top-12 w-full max-w-2xl bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
              <ul className="max-h-80 overflow-y-auto">
                {searchResults?.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm transition"
                    onClick={() => handleSuggestionClick(result)}
                  >
                    <span className="text-gray-400">🔍</span>
                    <span className="truncate">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <img
            className="h-9 w-9 rounded-full cursor-pointer hover:opacity-80 transition"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
