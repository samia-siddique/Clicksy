import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

const Camera = ({ capturedImage, setCapturedImage }) => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(null);

  //Take photo three times
  useEffect(() => {
    if (capturedImage.length === 0) return;
    if (capturedImage.length === 3) {
      navigate("/customize");
    } else {
      startCount();
    }
  }, [capturedImage, navigate]);

  //Set 3sec CountDown Timer
  const startCount = () => {
    if (countDown !== null) return;
    setCountDown(3);
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
    const imgScreenShot = webcamRef.current.getScreenshot();
    setCapturedImage((prev) => [...prev, imgScreenShot]);
  };

  return (
    <div>
      {countDown !== null && <h1>{countDown}</h1>}
      <Webcam screenshotFormat="image/png" ref={webcamRef} />
      <button onClick={startCount}>cheez</button>

      {capturedImage.map((image, index) => (
        <img src={image} key={index} alt={`captured ${index + 1}`} />
      ))}
    </div>
  );
};

export default Camera;
