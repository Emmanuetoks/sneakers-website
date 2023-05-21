import { useState } from "react";
import { useContext } from "react";
import countContext from "../context/itemCount";

const Price = () => {
  const [price, setPrice] = useState({ mainPrice: 250, discount: 50 });
  return (
    <div className="price-section">
      <h3>
        {`$ ${
          price.discount === 0
            ? price.mainPrice
            : (price.mainPrice * price.discount) / 100
        }`}{" "}
        <span>{price.discount}%</span>
      </h3>
      <h5>{`$ ${price.discount != 0 ? price.mainPrice : ""}`}</h5>
    </div>
  );
};

export default Price;
