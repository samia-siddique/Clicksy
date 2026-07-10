import React, { useRef, useState } from "react";
import "./Customize.css";
import html2canvas from "html2canvas";

const Customize = ({ selectedImage, capturedImage }) => {
  const [text, setText] = useState("");
  const [sticker, setSticker] = useState("");
  const stripRef = useRef(null);

  //Add Text
  const handleAddText = (e) => {
    setText(e.target.value);
  };

  //Download Strip
  const downloadStrip = async () => {
    const canvas = await html2canvas(stripRef.current);
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "Clicksy.png";
    link.href = image;
    link.click();
  };

  return (
    <div className="customize">
      <h2>Customize It</h2>

      <div className="customize-container">
        <div className="photostrip" ref={stripRef}>
          {selectedImage && (
            <div className="photo-frame">
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            </div>
          )}

          {capturedImage.map((img, index) => (
            <div className="photo-frame" key={index}>
              <img src={img} alt={`Preview ${index + 1}`} />
            </div>
          ))}

          {sticker && <span className="sticker">{sticker}</span>}

          <div className="strip-footer">Clicksy ♥</div>

          {text && <p className="photo-text">{text}</p>}
        </div>

        <div className="right-container">
          <div className="tools-section">
            <h3>Stickers</h3>

            <button onClick={() => setSticker("🌸")}>🌸</button>
            <button onClick={() => setSticker("⭐")}>⭐</button>
            <button onClick={() => setSticker("💖")}>💖</button>
            <button onClick={() => setSticker("📷")}>📷</button>
            <button onClick={() => setSticker("☁️")}>☁️</button>

            <h3>Add Text</h3>

            <input
              type="text"
              placeholder="Say cheese..."
              value={text}
              onChange={handleAddText}
            />

            
          </div><button onClick={downloadStrip} className="download-btn">Download Strip</button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
