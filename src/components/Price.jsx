import { useState } from "react";
import { useContext } from "react";
import countContext from "../context/itemCount";

const Price = () => {
  const [price, setPrice] = useState({ mainPrice: 250, discount: 50 });
  return (
    <div className="price-section flex">
      <h3 className="text-accent-400 fw-300">
        {`$${
          price.discount === 0
            ? price.mainPrice
            : (price.mainPrice * price.discount) / 100
        }`}{".00 "}
        <span className="text-accent-500 discount bg-light-orange fw-200">{price.discount}%</span>
      </h3>
      <h5 style={{'textDecoration':'line-through'}} className="text-accent-200 fw-200">{`$${price.discount != 0 ? price.mainPrice : ""}.00`}</h5>
    </div>
  );
};

export default Price;
