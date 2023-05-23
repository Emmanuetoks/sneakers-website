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
import SlideBox from "./SlideBox";
import LightBox from "./LightBox";

const Main = () => {
  const [showLightBox, setShowLightBox] = useState(false);

  const [largeImg, setLargeImg] = useState(image1);
  const largeImages = [image1, image2, image3, image4];
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <main className="main grid self-center place-center">
      <SlideBox
        largeImages={largeImages}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        customClass={"main__mobile-image-box"}
      />
      {showLightBox ? <LightBox setShowLightBox={setShowLightBox} /> : ""}
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
