import React, { useState } from "react";
import { importImagePathsFromFolder } from "../../../utils";

const photos = importImagePathsFromFolder("gallery");

const PhotoGallery = () => {
  const [current, setCurrent] = useState(null);

  const openSlider = (index) => {
    setCurrent(index);
  };

  const closeSlider = () => {
    setCurrent(null);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + photos.length) % photos.length);
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Thumbnail ${index}`}
            className="cursor-pointer rounded-lg"
            onClick={() => openSlider(index)}
          />
        ))}
      </div>

      {current !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeSlider}
            className="absolute top-4 right-4 text-white text-2xl lg:text-3xl py-2 px-4"
          >
            ×
          </button>
          <button
            onClick={prevSlide}
            className="absolute left-4 text-white text-2xl py-2 px-4"
          >
            ❮
          </button>
          <img
            src={photos[current]}
            alt={`Slide ${current}`}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={nextSlide}
            className="absolute right-4 text-white text-2xl py-2 px-4"
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
