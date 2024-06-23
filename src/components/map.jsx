import React, { useState } from "react";
import "../styles/map.css";
import Marker from "./marker";
import LegendDisplay from "./legend";
import FullMap from "./fullmap";
import DistrictMapDisplay from "./districtmap";
// import DistrictMapDisplay from "./districtmaptwo";
import "../styles/map.css";

function MapDisplay() {
  const [fullMap, setFullMap] = useState(true);
  const [districtMap, setDistrictMap] = useState(null);

  return (
    <div className="map_container">
      <LegendDisplay
        setFullMap={setFullMap}
        district={districtMap}
        setDistrict={setDistrictMap}
      />
      {!!fullMap && <FullMap />}

      {!!districtMap &&
        <DistrictMapDisplay
          district={districtMap}
          setDistrict={setDistrictMap}
          setFullMap={setFullMap}
        />
      }
    </div>
  );
}

export default MapDisplay;
