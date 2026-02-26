import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_CATEGORY_API } from "../utils/constant";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

export const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");

  const videoCategories = async () => {
    await fetch(YOUTUBE_VIDEO_CATEGORY_API);
  };

  useEffect(() => {
    dispatch(closeMenu());
    videoCategories();
  }, [dispatch]);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-[1800px] mx-auto px-0 sm:px-6 py-2 sm:py-6 w-full">
        {/* Video + Chat Row */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full">
          {/* Video Section */}
          <div className="flex-1 w-full">
            <div className="bg-black rounded-none sm:rounded-xl overflow-hidden shadow-md w-full">
              <div className="relative pb-[56.25%] w-full">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Live Chat Section */}
          <div className="w-full lg:w-[380px] px-2 sm:px-0">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 h-[500px] lg:h-full w-full">
              <LiveChat />
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-4 sm:mt-8 max-w-5xl px-2 sm:px-0 w-full">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 w-full">
            <CommentsContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
