import React from "react";
import "./SelectPhoto.css";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { Camera, Image } from "lucide-react";

const SelectPhoto = ({ setSelectedImage }) => {
  const navigate = useNavigate();

  // Upload Photo
  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    navigate("/customize");
  };

  return (
    <div className="select-photo">
      <h1>Clicksy</h1>

      <p>Let's get your Photos</p>
      <div className="add-photo-btns">
        <div className="take-btn btn-card" onClick={() => navigate("/capture")}>
          <Camera size={35} className="icon" />
          <span>Take Photo</span>
        </div>

        <label htmlFor="upload" className="upload-btn btn-card">
          <Image size={35} className="icon" />
          <span>Upload Photo</span>
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          id="upload"
        />
      </div>
    </div>
  );
};

export default SelectPhoto;
