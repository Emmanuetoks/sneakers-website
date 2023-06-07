import { useEffect, useRef, useState } from "react";
import NextBtn from "/images/icon-next.svg";
import PrevBtn from "/images/icon-previous.svg";
import image1 from "/images/image-product-1.jpg";
import image2 from "/images/image-product-2.jpg";
import image3 from "/images/image-product-3.jpg";
import image4 from "/images/image-product-4.jpg";

const SlideBox = ({ customClass }) => {
  let slides = useRef(null);
  let currSlide = useRef(0);

  useEffect(() => {
    slides.current = document.querySelectorAll(".lightbox__slider .lrg-img");

    slides.current.forEach((slide,index) => {
      slide.style.transform = `translateX(${(index) * 100}%)`;
    })
  }, []);

  const prev = () => {
    if (currSlide.current === 0) {
      currSlide.current = -3;
    } else {
      currSlide.current++;
    }

    slides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index + currSlide.current) * 100}%)`;
    });
  };

  const next = () => {
    console.log(currSlide.current);
    console.log('hello');
    if (currSlide.current === -3) {
      currSlide.current = 0;
    } else {
      currSlide.current--;
    }
    slides.current.forEach((slide, index) => {
      console.log(index);
      slide.style.transform = `translateX(${(index + currSlide.current) * 100}%)`;
    });
  };
  return (
    <div className={`${customClass} slide-box pos-rel`}>
      <button onClick={prev} className="prev-btn slide-btn">
        <img src={PrevBtn} />
      </button>
      {/* <img src={largeImages[imageIndex]} className="lrg-img w-100" /> */}
      <img src={image1} className="lrg-img w-100 " />
      <img src={image2} className="lrg-img w-100 " />
      <img src={image3} className="lrg-img w-100 " />
      <img src={image4} className="lrg-img w-100 " />
      <button onClick={next} className="next-btn slide-btn">
        <img src={NextBtn} />
      </button>
    </div>
  );
};

export default SlideBox;
