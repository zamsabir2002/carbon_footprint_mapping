import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "../styles/markerinfo.css";

const MarkerInfoDisplay = () => {
  return (
    <div className="marker_info_container">
      <div className="marker_info_content">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size="xl"
          style={{
            fontSize: "2rem",
            color: "green",
          }}
        />
        <div>Sites with acceptable carbon footprint</div>
      </div>

      <div className="marker_info_content">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size="xl"
          style={{
            fontSize: "2rem",
            color: "red",
          }}
        />
        <div>Sites with unsafe carbon footprint</div>
      </div>
    </div>
  );
};

export default MarkerInfoDisplay;
