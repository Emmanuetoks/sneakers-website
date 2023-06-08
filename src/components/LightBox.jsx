import image1_Thumbnail from "/images/image-product-1-thumbnail.jpg";
import image2_Thumbnail from "/images/image-product-2-thumbnail.jpg";
import image3_Thumbnail from "/images/image-product-3-thumbnail.jpg";
import image4_Thumbnail from "/images/image-product-4-thumbnail.jpg";
import CloseBtn from "/images/icon-close.svg";

import { useRef, useEffect, useReducer } from "react";
import SlideBox from "./SlideBox";

const LightBox = ({ setShowLightBox, dispatchSlideAction }) => {
 
  return (
    <div className="lightbox pos-abs">
      <button
        onClick={() => setShowLightBox(false)}
        className="lightbox__close-btn pos-abs"
      >
        <img src={CloseBtn} className="" />
      </button>
      <SlideBox
        customClass={"lightbox__slider"}
        dispatchSlideAction={dispatchSlideAction}
      />

      <div className="lightbox__thumbnails flex w-100">
        <img
          onClick={() => dispatchSlideAction({ type: "thumbNail", slideTo: 0 })}
          src={image1_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() =>
            dispatchSlideAction({ type: "thumbNail", slideTo: -1 })
          }
          src={image2_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() =>
            dispatchSlideAction({ type: "thumbNail", slideTo: -2 })
          }
          src={image3_Thumbnail}
          alt=""
          className="small-img w-100"
        />
        <img
          onClick={() =>
            dispatchSlideAction({ type: "thumbNail", slideTo: -3 })
          }
          src={image4_Thumbnail}
          alt=""
          className="small-img w-100"
        />
      </div>
    </div>
  );
};

export default LightBox;
