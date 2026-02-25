import React, { useCallback, useEffect } from "react";

import { movieList } from "../utils/appSlice";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const VideoList = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.app.movie);
  console.log(videoList, "video list");

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get("search_query");

  const handleSearchClick = useCallback(async () => {
    console.log("one");
    const response = await fetch(YOUTUBE_SEARCH_VIDEO_API + searchName);
    const json = await response.json();
    dispatch(movieList(json.items));
  }, [searchName, dispatch]);

  useEffect(() => {
    handleSearchClick();
  }, [handleSearchClick]);

  return (
    <div className="p-5">
      {videoList?.map((video) => (
        <Link
          to={`/watch?v=${video.id.videoId}`}
          key={video.id.videoId}
          className="block"
        >
          <div className="flex gap-4 mb-6 group cursor-pointer">
            {/* Thumbnail */}
            <div className="relative">
              <img
                className="w-64 h-36 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
            </div>

            {/* Video Details */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                {video.snippet.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {video.snippet.channelTitle}
              </p>

              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {video.snippet.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
