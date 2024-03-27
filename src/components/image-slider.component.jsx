import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { photos } from "../utils/photo.data";

import "./image-slider.styles.css";

const ImageSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(photos);
  }, []);

  const handleNext = () => {
    const copyImages = [...images];
    copyImages.push(copyImages.shift());
    setImages(copyImages);
  };

  return (
    <div className="image-slider">
      <div className={"image-list"}>
        {images && images.length
          ? images.map((image) => (
              <img
                key={image.id}
                alt={image.title}
                src={require("../images" + image.url)}
                style={{ width: "245px", height: "140px", paddingRight: "10px", }}

              ></img>
            ))
          : null}
      </div>

      <div className="image-slide-navigation">
        <div className="more-photos" onClick={handleNext}>
          {/* <p>Bấm để chuyển ảnh</p> */}
        </div>
        <div onClick={handleNext} className="arrow-container">
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
