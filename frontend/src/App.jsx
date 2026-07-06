import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SelectPhoto from "./pages/SelectPhoto/SelectPhoto";
import Capture from "./pages/Capture/Capture";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectPhoto" element={<SelectPhoto/>} />
        <Route path="/capture" element={<Capture/>} />
      </Routes>
    </div>
  );
};

export default App;
