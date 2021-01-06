import React from "react";

function LecturesCard(props) {
  return (
    <div
      className="lectures-card"
      style={{
        width: props.lectureCardProps.width || "50%",
        height: "368px",
        borderRadius: "20px",
        backgroundImage: "url(" + props.lectureCardProps.img + ")",
        background: "#1A530C 0% 0% no-repeat cover",
        backgroundSize: "cover",
        // backgroundBlendMode: "screen",
        // mixBlendMode: "hue",
        // filter: "brightness(200%)"
      }}
    >
      <div className="title-div"
       style={{
        opacity: props.lectureCardProps.opacity
      }}>
        <p className="title">{props.lectureCardProps.title}</p>
      </div>
    </div>
  );
}

export default LecturesCard;
