import React, { useState } from "react";
import FullMapDisplay from "./fullmap";
import "./../styles/map.css";
import MapDisplay from "./map";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="heading">CARBON FOOTPRINT MAP OF KARACHI'S HEAVY CONSTRUCTION EQUIPMENT</div>
        <MapDisplay />
      </div>
      <footer>
        This map represents the carbon footprint of heavy construction equipment in Karachi city.
        This visual presentation of the carbon footprint will help concerned authorities to take required actions to decrease the carbon footprint.
      </footer>
    </>
  );
};

export default Index;
