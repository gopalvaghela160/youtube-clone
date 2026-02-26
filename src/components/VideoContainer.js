import React, { useCallback, useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard, { AdsVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [NextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false); 

  const videoList = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    const url = NextPageToken
      ? `${YOUTUBE_VIDEO_API}&pageToken=${NextPageToken}`
      : YOUTUBE_VIDEO_API;

    const response = await fetch(url);
    const json = await response.json();

    setVideos((prev) => [...prev, ...json.items]);
    setNextPageToken(json.nextPageToken || null);

    setLoading(false);
  }, [loading, NextPageToken]);

  useEffect(() => {
    videoList();
  }, [videoList]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !NextPageToken) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollTop >= fullHeight - 200) {
        videoList();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [NextPageToken, loading, videoList]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
      {/* Sponsored Video (Only First One) */}
      {videos.length > 0 && <AdsVideoCard info={videos[0]} />}
      {/* Rest Videos (Skip First) */}
      {videos.slice(1).map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={`${video.id}-${index}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
