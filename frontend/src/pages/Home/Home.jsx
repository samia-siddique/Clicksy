import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Clicksy</h1>
      <p>Pose, Click, Repeat</p>

      <div className="home-img">
        <img src={assets.camera} alt="" />
      </div>

      <button class="start-btn" onClick={() => navigate("/selectPhoto")}>
        Start
      </button>
    </div>
  );
};

export default Home;
