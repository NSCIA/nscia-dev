import React from "react";

function SmallCards(props) {
  console.log(props);
  return (
    <div className="small-card">
      <div
        className="sec-one"
        style={{
          background:
            "transparent url(" +
            props.smallCardProps.img +
            ") 0% 0% no-repeat padding-box",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <button className="mid-btn">NEWS</button>
      <div className="sec-two">
        <div className="content">
          <p>{props.smallCardProps.headline}</p>
          <a>Read more</a>
        </div>
      </div>
    </div>
  );
}

export default SmallCards;
