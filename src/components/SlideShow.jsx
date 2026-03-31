import { useState } from "react";
import { images } from "../data/images";

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(1);
  console.log(currentSlide);

  return (
    <div className="carousel w-full h-72 md:h-140 rounded-lg shadow-2xl">
      {images.map((img, index) => {
        const prevIndex = index === 0 ? images.length - 1 : index - 1;
        const nextIndex = index === images.length - 1 ? 0 : index + 1;

        return (
          <div
            id={`slide${index + 1}`}
            key={`slide${img.id}`}
            className="carousel-item relative w-full"
          >
            <img src={img.src} alt={img.name} className="w-full" />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${prevIndex + 1}`}
                className="btn btn-circle"
                onClick={() => setCurrentSlide(prevIndex + 1)}
              >
                ❮
              </a>
              <a
                href={`#slide${nextIndex + 1}`}
                className="btn btn-circle"
                onClick={() => setCurrentSlide(nextIndex + 1)}
              >
                ❯
              </a>
            </div>
          </div>
        );

      })}
    </div>
  );
}
