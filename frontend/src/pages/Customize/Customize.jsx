import React, { useState } from "react";
import "./Customize.css";
import { useNavigate } from "react-router-dom";

const Customize = ({ selectedImage, capturedImage }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [sticker, setSticker] = useState("");
  const [frames, setFrames] = useState("");

  const handleAddText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="customize">
      <h2>Customize It</h2>

      <div className="customize-container">
        <div className="photostrip">
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="selected" />
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

            <button
              onClick={() => navigate("/preview")}
              className="download-btn"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
