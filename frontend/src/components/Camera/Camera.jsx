import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const Camera = ({
  capturedImage,
  setCapturedImage,
  selectedFilter,
  flash,
  setFlash,
}) => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(null);
  const previewImages = Array(3).fill(null);

  //Take photo three times
  useEffect(() => {
    if (capturedImage.length === 0) return;
    if (capturedImage.length === 3) {
      setTimeout(() => {
        navigate("/customize");
      }, 1500);
    } else {
      startCount();
    }
  }, [capturedImage, navigate]);

  //Set 3sec CountDown Timer
  const startCount = () => {
    if (countDown !== null) return;
    setCountDown(3);
  };

  //flash
  const cameraFlash = () => {
    setTimeout(() => {
      setFlash(false);
    }, 200);

    setFlash(true);
  };

  useEffect(() => {
    if (countDown === null) return;

    if (countDown === 0) {
      capture();
      setCountDown(null);
      return;
    }

    const timer = setTimeout(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countDown]);

  //Take Photo
  const capture = () => {
    cameraFlash();
    const imgScreenShot = webcamRef.current.getScreenshot();
    setCapturedImage((prev) => [...prev, imgScreenShot]);
  };

  return (
    <div className="camera">
      <Webcam
        screenshotFormat="image/png"
        ref={webcamRef}
        mirrored={true}
        style={{ filter: selectedFilter }}
      />

      {flash && <span className="flash"></span>}
      {countDown !== null && <h1 className="countdown">{countDown}</h1>}

      <div className="captured-img">
        {previewImages.map((img, index) => (
          <div className="preview-box" key={index}>
            {capturedImage[index] && (
              <img src={capturedImage[index]} alt={`Preview ${index + 1}`} />
            )}
          </div>
        ))}
      </div>

      <button onClick={startCount} className="capture-btn"></button>
    </div>
  );
};

export default Camera;
