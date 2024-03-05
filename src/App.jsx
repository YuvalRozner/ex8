import React, { useState } from "react";
import "./App.css";

const images = Array.from(
  { length: 10 },
  (_, index) => `https://picsum.photos/200/300?random=${index + 1}`
);

const App = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
    setSelectedIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="App">
      <div className="image-preview">
        <button onClick={handlePrev}>Prev</button>
        <img src={selectedImage} alt="Selected" />
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="image-grid">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => handleSelectImage(image, index)}
            className={selectedIndex === index ? "selected" : ""}
          >
            <img src={image} alt={`Random ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
