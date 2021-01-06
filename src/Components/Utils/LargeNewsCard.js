import React from "react";

function LargeNewsCard(props) {
  return (
    <div className="large-news-card">
      <div className="sec-one">
        <div className="content">
          <p>{props.largeCardProps.headline}</p>
          <a>Find out more about this statement</a>
        </div>
      </div>
      <div
        className="sec-two"
        style={{
          background:
            "transparent url(" +
            props.largeCardProps.img +
            ") 0% 0% no-repeat padding-box",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "lighten"
        }}
      ></div>
    </div>
  );
}

export default LargeNewsCard;
