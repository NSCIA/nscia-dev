import React from "react";
import YouTube from "react-youtube";

const SliderVideo = () => {
  const opts = {
    height: "450",
    width: "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const onReady = (e) => {
    // console.log(e)
    e.target.pauseVideo();
  }
  // https://www.youtube.com/watch?v=qSEnrrj_nwU
  return (
    <div className="slider-vid">
      <YouTube className="vid" videoId="EPLT-6NzoHk" opts={opts} onReady={onReady} />
    </div>
  );
};

export default SliderVideo;
