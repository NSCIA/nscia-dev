import React from "react";
import { states } from "../Static/states";
import MosqueSearch from "./MosqueSearch";

function CentralMosqueFinder(props) {
  // if(states.length < 1) return <div>loading .....</div>

  return (
    <div className="cm-finder">
      <div className="cm-title">
        {props.centralMosqueProps.centralMosqueTitle}
      </div>
      <div className="cm-subtitle">
        {props.centralMosqueProps.centralMosqueSubTitle}
      </div>

      <MosqueSearch states={states} />
    </div>
  );
}

export default CentralMosqueFinder;
