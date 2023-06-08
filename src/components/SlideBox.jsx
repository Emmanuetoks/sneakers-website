import { useEffect } from "react";
import NextBtn from "/images/icon-next.svg";
import PrevBtn from "/images/icon-previous.svg";
import image1 from "/images/image-product-1.jpg";
import image2 from "/images/image-product-2.jpg";
import image3 from "/images/image-product-3.jpg";
import image4 from "/images/image-product-4.jpg";

const SlideBox = ({ customClass, dispatchSlideAction }) => {
  useEffect(() => {
    document
      .querySelectorAll(".lightbox .lrg-img")
      .forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
      });

    document
      .querySelectorAll(".main__mobile-carousel .lrg-img")
      .forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
      });
  }, []);

  const prev = () => {
    dispatchSlideAction({ type: "prev" });
  };

  const next = () => {
    dispatchSlideAction({ type: "next" });
  };
  return (
    <div className={`${customClass} slide-box pos-rel`}>
      <button onClick={prev} className="prev-btn slide-btn">
        <img src={PrevBtn} />
      </button>
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
