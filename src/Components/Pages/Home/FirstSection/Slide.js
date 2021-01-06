import { RightOutlined } from "@ant-design/icons";
import React from "react";
import SliderVideo from "./SliderVideo";
import WeatherWidget from "./WeatherWidget";

const Slide = (props) => {
  return (
    <div
      className="slide"
      style={{
        // display: "flex",
        top: "60px",
        // left: "0",
        // width: "100%",
        display: "flex",
        height: "900px",
        position: "relative",
        backgroundImage: `url(${props.image})`,
        // backgroundImage: "linear-gradient(to right, rgba(7, 41, 1, 0.856) 50%, rgba(4, 20, 1, 0.856) 100%), url(" + props.img + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundBlendMode: ", difference, lighten",
        // transition: "transform ease-in .1s"
      }}
    >
      {/* <img src={props.img} alt="" /> */}
      <WeatherWidget />
      <div className="weather-widget">{props.widget}</div>
      <div className="welcome-div">
        <p className="welcome">WELCOME </p>
        {/* <RightOutlined className="welcome-arr" /> */}
        {/* <hr className="welcome-arr" /> */}
        <div className="welcome-arr"></div>
      </div>
      <h2 className="name-ar">{props.nameAr}</h2>
      <div className="title">{props.title}</div>
      <div className="hr"></div>
      <div className="sub-title">{props.subTitle}</div>
      <SliderVideo />
    </div>
  );
};

export default Slide;
