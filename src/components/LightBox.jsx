import image1 from "/images/image-product-1.jpg";
import image1_Thumbnail from "/images/image-product-1-thumbnail.jpg";

import image2 from "../../public/images/image-product-2.jpg";
import image2_Thumbnail from "/images/image-product-2-thumbnail.jpg";

import image3 from "/images/image-product-3.jpg";
import image3_Thumbnail from "/images/image-product-3-thumbnail.jpg";

import image4 from "/images/image-product-4.jpg";
import image4_Thumbnail from "/images/image-product-4-thumbnail.jpg";
import CloseBtn from "/images/icon-close.svg";

import { useState, useRef, useEffect, useReducer } from "react";
import SlideBox from "./SlideBox";

const LightBox = ({ setShowLightBox }) => {
  const largeImages = [image1, image2, image3, image4];
  const [imageIndex, setImageIndex] = useState(0);
  let slides = useRef(null);
  const [, dispatchSlideAction] = useReducer(slideImages, 0);

  
  useEffect(() => {
    slides.current = document.querySelectorAll(".lightbox__slider .lrg-img");

    slides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });
  }, []);

  function slideImages(currSlide, action) {
    if (action.type === "thumbNail") {
      currSlide = action.slideTo;
    } else {
      if (action.type === "prev") {
        if (currSlide === 0) {
          currSlide = -3;
        } else {
          currSlide++;
        }
      } else if (action.type === "next") {
        if (currSlide === -3) {
          currSlide = 0;
        } else {
          currSlide--;
        }
      }
    }

    slides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index + currSlide) * 100}%)`;
    });
  }

  return (
    <div className="lightbox pos-abs">
      <button
        onClick={() => setShowLightBox(false)}
        className="lightbox__close-btn pos-abs"
      >
        <img src={CloseBtn} className="" />
      </button>
      <SlideBox
        largeImages={largeImages}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        customClass={"lightbox__slider"}
      />

      <div className="lightbox__thumbnails flex w-100">
        <img
          onClick={() => setImageIndex(0)}
          src={image1_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() => dispatchSlideAction({ type: "thumbNail", slideTo: 1 })}
          src={image2_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() => setImageIndex(2)}
          src={image3_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() => setImageIndex(3)}
          src={image4_Thumbnail}
          alt=""
          className="small-img w-100"
        />
      </div>
    </div>
  );
};

export default LightBox;
