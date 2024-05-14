import React from "react";
import fullMapImage from './images/map.webp'

function FullMap() {
  return (
    <div className="image_container">
      <img
        // src="./images/map.png"
        src={fullMapImage}
        alt="karachi_map"
        className="map_image map_image_2"
        style={{
          width: "600px",
        }}
        loading="eager"
      />
    </div>
  );
}

export default FullMap;
