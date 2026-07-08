import React from "react";

const Customize = ({ selectedImage, capturedImage }) => {
  return (
    <div>
      <h2>Customize It</h2>

      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="selected" />
      )}

      {capturedImage.map((image, index) => (
        <img key={index} src={image} alt={`captured ${index + 1}`} />
      ))}
    </div>
  );
};

export default Customize;
