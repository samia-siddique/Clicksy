import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectPhoto from "./pages/SelectPhoto/SelectPhoto";
import Capture from "./pages/Capture/Capture";
import Customize from "./pages/Customize/Customize";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/selectPhoto"
          element={<SelectPhoto setSelectedImage={setSelectedImage} />}
        />

        <Route
          path="/capture"
          element={
            <Capture
              capturedImage={capturedImage}
              setCapturedImage={setCapturedImage}
            />
          }
        />

        <Route
          path="/customize"
          element={
            <Customize
              selectedImage={selectedImage}
              capturedImage={capturedImage}
            />
          }
        />

      </Routes>
    </div>
  );
};

export default App;
