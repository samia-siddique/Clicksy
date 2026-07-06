import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectPhoto from "./pages/SelectPhoto/SelectPhoto";
import Capture from "./pages/Capture/Capture";
import Customize from "./pages/Customize/Customize";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/selectPhoto"
          element={<SelectPhoto setSelectedImage={setSelectedImage} />}
        />

        <Route path="/capture" element={<Capture />} />

        <Route
          path="/customize"
          element={<Customize selectedImage={selectedImage} />}
        />
      </Routes>
    </div>
  );
};

export default App;
