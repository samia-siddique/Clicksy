import React from "react";

const Customize = ({ selectedImage }) => {
  return (
    <div>
      <h2>Customize It</h2>
      <img src={URL.createObjectURL(selectedImage)} alt="selected" />
    </div>
  );
};

export default Customize;
