import React, { useState } from "react";

const FaceRecognition = ({ url, boxes }) => {
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  const handleImageLoad = (e) => {
    setImgDimensions({ width: e.target.width, height: e.target.height });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          id="inputImage"
          src={url}
          alt="Face"
          width="500px"
          onLoad={handleImageLoad}
          style={{ display: "block" }}
        />
        {boxes.map((box, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: box.topRow * imgDimensions.height,
              left: box.leftCol * imgDimensions.width,
              width: (box.rightCol - box.leftCol) * imgDimensions.width,
              height: (box.bottomRow - box.topRow) * imgDimensions.height,
              border: "3px solid red",
              boxSizing: "border-box",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
