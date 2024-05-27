import React, { useState } from "react";
import FullMapDisplay from "./fullmap";
import "./../styles/map.css";
import MapDisplay from "./map";
import Footer from "./footer";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="heading">CARBON FOOTPRINT MAP OF KARACHI'S HEAVY CONSTRUCTION EQUIPMENT</div>
        <MapDisplay />
      </div>
      <Footer/>
    </>
  );
};

export default Index;
