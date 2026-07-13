import React, { useState } from "react";
import "./Capture.css";
import Camera from "../../components/Camera/Camera";
import Filters from "../../components/Filters/Filters";

const Capture = ({ capturedImage, setCapturedImage }) => {
  const [selectedFilter, setSelectedFilter] = useState("none");

  return (
    <div className="capture">
      <h3>
        Strike a Pose <span>!</span>
      </h3>

      <Camera
        capturedImage={capturedImage}
        setCapturedImage={setCapturedImage}
        selectedFilter={selectedFilter}
      />

      <Filters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
};

export default Capture;
