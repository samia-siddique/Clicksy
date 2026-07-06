import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Clicksy</h1>
      <button onClick={() => navigate("/capture")}>Take Photo</button>
      <input type="file" accept="image/*" onChange={handleFileSelect} />
    </div>
  );
};

export default SelectPhoto;
