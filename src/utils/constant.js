const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY +
  "&pageToken=";

export const YOUTUBE_VIDEO_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube-backend-rzpy.onrender.com/youtube-suggest?q=";
export const YOUTUBE_SEARCH_VIDEO_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
export const YOUTUBE_CATEGORY_API =
  "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// Live chat >>>>> Infinite Scroll >>>>> Pagination
