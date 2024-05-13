import React from "react";
import "../styles/legend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const LegendDisplay = ({ district, setDistrict, setFullMap }) => {

    const changeMap = (districtName) => {
        console.log(districtName)
        setFullMap(false)
        setDistrict(districtName)
    }

  return (
    <div className="legend_container">

      <div
        className="each_legend"
        onClick={() => changeMap("malir")}
      >
        <div
          className="legend_key"
          style={{
            backgroundColor: "rgba(241,187,113,255)",
          }}
        ></div>
        Malir
      </div>

      <div
        className="each_legend"
        onClick={() => changeMap("west")}

      >
        <div
          className="legend_key"
          style={{
            backgroundColor: "rgba(131,196,172,255)",
          }}
        ></div>
        West
      </div>

      <div
        className="each_legend"
        onClick={() => changeMap("east")}

      >
        <div
          className="legend_key"
          style={{
            backgroundColor: "rgba(206,138,135,255)",
          }}
        ></div>
        East
      </div>

      <div
        className="each_legend"
        onClick={() => changeMap("central")}

      >
        <div
          className="legend_key"
          style={{
            backgroundColor: "rgba(145,156,172,255)",
          }}
        ></div>
        Central
      </div>

      <div
        className="each_legend"
        onClick={() => changeMap("south")}

      >
        <div
          className="legend_key"
          style={{
            backgroundColor: "rgba(202,219,169,255)",
          }}
        ></div>
        South
      </div>
    </div>
  );
};

export default LegendDisplay;
