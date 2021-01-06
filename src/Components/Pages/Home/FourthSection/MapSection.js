import React from "react";
import CentralMosqueFinder from "../../../Utils/CentralMosqueFinder";
import NigeriaMap from "../../../Utils/NigeriaMap";

function MapSection(props) {
  const centralMosqueTitle = "Central Mosques in Nigeria";
  const centralMosqueSubTitle = "Find one nearby";
  const centralMosqueProps = {
    centralMosqueTitle,
    centralMosqueSubTitle,
  };
  return (
    <div className="map-section">
      <div className="central-mosques">
        <CentralMosqueFinder centralMosqueProps={centralMosqueProps} />
      </div>

      <div className="map-container">
        <NigeriaMap />
      </div>
    </div>
  );
}

export default MapSection;
