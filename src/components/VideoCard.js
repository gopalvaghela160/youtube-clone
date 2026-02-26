const formatViews = (views) => {
  if (!views) return "0 views";

  const num = parseInt(views);

  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M views";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K views";

  return num + " views";
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="w-full cursor-pointer group transition-transform duration-300 hover:scale-[1.02]">
      {/* Thumbnail */}
      <div className="relative">
        <img
          className="rounded-xl w-full h-40 object-cover"
          src={thumbnails?.medium?.url}
          alt={title}
        />

        {/* Duration badge (dummy for now) */}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          12:45
        </span>
      </div>

      {/* Video Info */}
      <div className="mt-3">
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">{channelTitle}</p>

        <p className="text-gray-500 text-xs">
          {formatViews(statistics?.viewCount)}
        </p>
      </div>
    </div>
  );
};
export const AdsVideoCard = ({ info }) => {
  return (
    <div className="relative w-full rounded-xl">
      {/* Ads Badge */}
      <span className=" absolute top-2 left-2 bg-yellow-500 text-white text-sm px-2 py-1 rounded-md shadow z-10">
        Sponsored
      </span>

      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
