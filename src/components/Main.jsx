import image1 from "../../public/images/image-product-1.jpg";
import image1_Thumbnail from "../../public/images/image-product-1-thumbnail.jpg";

import image2 from "../../public/images/image-product-2.jpg";
import image2_Thumbnail from "../../public/images/image-product-2-thumbnail.jpg";

import image3 from "../../public/images/image-product-3.jpg";
import image3_Thumbnail from "../../public/images/image-product-3-thumbnail.jpg";

import image4 from "../../public/images/image-product-4.jpg";
import image4_Thumbnail from "../../public/images/image-product-4-thumbnail.jpg";

import Price from "./Price";
import AddItem from "./AddItemBox";
import { useState } from "react";

const SlideBox = ({ customClass }) => {
  const largeImages = [image1, image2, image3, image4];
  const [imageIndex, setImageIndex] = useState(0);
  const prev = () => {
    setImageIndex((prevValue) => {
      if (imageIndex != 0) {
        return prevValue - 1;
      } else {
        return largeImages.length - 1;
      }
    });
  };

  const next = () => {
    setImageIndex((prevValue) => {
      if (imageIndex != largeImages.length - 1) {
        return prevValue + 1;
      } else {
        return 0;
      }
    });
  };

  const LightBox = () => {
    return (
      <div className="lightbox">
        <SlideBox />
        
      </div>
    );
  };

  return (
    <div className={`${customClass}`}>
      <button onClick={prev} className="prev-btn slide-btn">
        <span className="sr-only">previous</span>
      </button>
      <img src={largeImages[imageIndex]} className="lrg-img w-100" />
      <button onClick={next} className="next-btn slide-btn">
        <span className="sr-only">next</span>
      </button>
    </div>
  );
};

const Main = () => {
  const [largeImg, setLargeImg] = useState(image1);
  return (
    <main className="main grid self-center place-center">
      <SlideBox customClass={"main__mobile-image-box"} />
      <section className="main__desktop-image-box">
        <img src={largeImg} className="w-100 lrg-img" />
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

      <section className="main__product-description place-center">
        <h5 className="uppercase">sneaker company</h5>
        <h1 className="capitalize">fall out limited edition sneakers</h1>
        <p>
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
