import { CloudDownloadOutlined, ShareAltOutlined } from "@ant-design/icons";
import React from "react";

function PubCard(props) {
  return (
    <div className="pub-card">
      <div className="pub-img-div">
        <img src={props.pubContent.img} alt="CardImage" />
      </div>
      <div className="pub-content">
        <h1 className="pub-content-title">
          {props.pubContent.pubTitle}
        </h1>
        <p className="pub-content-subtitle">
          {props.pubContent.pubSubtitle}
        </p>
      </div>
      <div className="pub-buttons">
        <button >Read more</button>
        <div className="pub-nested-buttons">
          <CloudDownloadOutlined
            style={{ fontSize: "20px", color: "#1a530c", paddingRight: "10px" }}
          />
          <ShareAltOutlined style={{ fontSize: "20px", color: "#1a530c" }} />
        </div>
      </div>
    </div>
  );
}

export default PubCard;
