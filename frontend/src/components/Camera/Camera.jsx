import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState([]);

  const capture = () => {
    const imgScreenShot = webcamRef.current.getScreenshot();
    console.log(imgScreenShot);

    setCapturedImage(imgScreenShot);
  };

  return (
    <div>
      <Webcam screenshotFormat="image/png" ref={webcamRef} />
      <button onClick={capture}>cheez</button>

      {capturedImage && <img src={capturedImage} alt="" />}
    </div>
  );
};

export default Camera;
