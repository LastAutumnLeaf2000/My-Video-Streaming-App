const GOOGLE_API_KEY = "AIzaSyDCPhUGoDsauUcOnWyAHeqCCSbSKKMzQF8";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

// const SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key="+GOOGLE_API_KEY

// const SEARCH_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="

// const GOOGLE_KEY2 = "&key="+GOOGLE_API_KEY

export const YOUTUBE_VIDEO_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


  export const RANDOM_SEARCH_API = "https://api.tvmaze.com/search/shows?q="