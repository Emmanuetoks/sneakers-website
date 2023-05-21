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

const Main = () => {

  return (
    <main className="main grid self-center">
      <section className="main__product-image">
        <img src={image1} className="w-100 lrg-img" />
        <div className="main__small-img-box flex w-100">
          <img src={image1_Thumbnail} alt="" className="small-img w-100" />
          <img src={image2_Thumbnail} alt="" className="small-img w-100" />
          <img src={image3_Thumbnail} alt="" className="small-img w-100" />
          <img src={image4_Thumbnail} alt="" className="small-img w-100" />
        </div>
      </section>

      <section className="main__product-description grid center-items">
        <h5 className="uppercase">sneaker company</h5>
        <h1 className="capitalize">fall out limited edition sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weatheer can offer.
        </p>
        <Price/>
        <AddItem/>
      </section>
    </main>
  );
};

export default Main;
