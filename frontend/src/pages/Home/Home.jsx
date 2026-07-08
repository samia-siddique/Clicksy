import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Clicksy</h1>
      {/* <img src="" alt="" /> */}
      <button onClick={() => navigate("/selectPhoto")}>Start</button>
    </div>
  );
};

export default Home;
