import React from "react";

const Customize = ({ selectedImage, capturedImage }) => {
  return (
    <div>
      <h2>Customize It</h2>

      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="selected" />
      )}

      {capturedImage.map((img, index) => (
        <img key={index} src={img} alt={`captured ${index + 1}`} />
      ))}
    </div>
  );
};

export default Customize;
