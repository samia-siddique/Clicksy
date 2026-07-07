import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState([]);
  const navigate = useNavigate();

  //Take photo three times
  useEffect(() => {
    if (capturedImage.length === 3) {
      navigate("/customize");
    }
  }, [capturedImage, navigate]);

  //Take Photo
  const capture = () => {
    const imgScreenShot = webcamRef.current.getScreenshot();
    console.log(imgScreenShot);

    setCapturedImage((prev) => [...prev, imgScreenShot]);
  };

  return (
    <div>
      <Webcam screenshotFormat="image/png" ref={webcamRef} />
      <button onClick={capture}>cheez</button>

      {capturedImage.map((image, index) => (
        <img src={image} key={index} alt={`captured ${index + 1}`} />
      ))}
    </div>
  );
};

export default Camera;
