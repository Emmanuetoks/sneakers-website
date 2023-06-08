import image1 from "/images/image-product-1.jpg";
import image1_Thumbnail from "/images/image-product-1-thumbnail.jpg";

import image2 from "/images/image-product-2.jpg";
import image2_Thumbnail from "/images/image-product-2-thumbnail.jpg";

import image3 from "/images/image-product-3.jpg";
import image3_Thumbnail from "/images/image-product-3-thumbnail.jpg";

import image4 from "/images/image-product-4.jpg";
import image4_Thumbnail from "/images/image-product-4-thumbnail.jpg";
import Price from "./Price";
import AddItem from "./AddItemBox";
import { useState } from "react";
import SlideBox from "./SlideBox";
import LightBox from "./LightBox";
import { useReducer, useEffect, useRef } from "react";

const Main = () => {
  const [showLightBox, setShowLightBox] = useState(false);

  const [largeImg, setLargeImg] = useState(image1);
  const largeImages = [image1, image2, image3, image4];
  const [imageIndex, setImageIndex] = useState(0);

  let lightBoxSlides = useRef(null);
  let currSlide = useRef(0)
  let mobileSlides = useRef(null)
  const [, dispatchSlideAction] = useReducer(slideImages, 0);

  useEffect(() => {
    lightBoxSlides.current = document.querySelectorAll(".lightbox .lrg-img");

    mobileSlides.current = document.querySelectorAll('.main__mobile-carousel .lrg-img');

    console.log(mobileSlides);

    console.log(lightBoxSlides.current);
  }, [showLightBox]);

  function slideImages(currState, action) {
    if (action.type === "thumbnail") {
      currSlide.current = action.slideTo;
    } else {
      if (action.type === "prev") {
        if (currSlide.current === 0) {
          currSlide.current = -3;
        } else {
          currSlide.current++;
        }
        console.log(currSlide.current + 'prev');
      } else if (action.type === "next") {
        if (currSlide.current === -3) {
          currSlide.current = 0;
        } else {
          currSlide.current--;
        }
        console.log(currSlide.current + 'next');


      }
    }

    lightBoxSlides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index + currSlide.current) * 100}%)`;
    });

    mobileSlides.current.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index + currSlide.current) * 100}%)`;
    });

  }



  return (
    <main className="main grid self-center place-center">
      <SlideBox
        largeImages={largeImages}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        customClass={"main__mobile-carousel flex"}
        dispatchSlideAction={dispatchSlideAction}
      />
      {showLightBox ? <LightBox setShowLightBox={setShowLightBox} dispatchSlideAction={dispatchSlideAction}/> : ""}
      <section className="main__desktop-image-box">
        <img
          onClick={() => setShowLightBox(true)}
          src={largeImg}
          className="w-100 lrg-img"
        />
        <div className="main__small-img-box flex w-100">
          <img
            onClick={() => setLargeImg(image1)}
            src={image1_Thumbnail}
            alt=""
            className="small-img w-100"
          />
          <img
            onClick={() => setLargeImg(image2)}
            src={image2_Thumbnail}
            alt=""
            className="small-img w-100"
          />
          <img
            onClick={() => setLargeImg(image3)}
            src={image3_Thumbnail}
            alt=""
            className="small-img w-100"
          />
          <img
            onClick={() => setLargeImg(image4)}
            src={image4_Thumbnail}
            alt=""
            className="small-img w-100"
          />
        </div>
      </section>

      <section className="main__product-description flex place-center">
        <header>
          <h5 style={{'marginBottom': '1rem'}} className="uppercase text-accent-500 fw-200">sneaker company</h5>
          <h1 className="capitalize text-accent-400 fw-400">
            fall out limited edition sneakers
          </h1>
        </header>

        <p className="text-accent-300 fw-100">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weatheer can offer.
        </p>
        <Price />
        <AddItem />
      </section>
    </main>
  );
};

export default Main;
