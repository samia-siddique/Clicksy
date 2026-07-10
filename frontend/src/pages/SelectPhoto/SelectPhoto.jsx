import React, { useState } from "react";
import "./SelectPhoto.css";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { Camera, Image } from "lucide-react";

const SelectPhoto = ({ selectedImage, setSelectedImage }) => {
  const navigate = useNavigate();
  const [showUpload, setShowUpload] = useState(false);

  // Upload Photo
  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage((prev) => {
      const updated = [...prev, file];

      if (updated.length === 3) {
        navigate("/customize");
      }

      return updated;
    });

    e.target.value = "";
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

        <label
          htmlFor="upload"
          className="upload-btn btn-card"
          onClick={() => setShowUpload(true)}
        >
          <Image size={35} className="icon" />
          <span>Upload Photo</span>
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          id="upload"
        />

        {showUpload && (
          <div className="upload-preview">
            {[0, 1, 2].map((_, index) => (
              <label htmlFor="upload" className="upload-box" key={index}>
                {selectedImage[index] ? "✓" : "Upload"}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectPhoto;
