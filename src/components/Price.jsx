import { useState } from "react";

const Price = () => {
  const [price, setPrice] = useState({ mainPrice: 250, discount: 50 });
  return (
    <div className="price-section">
      <h4>
        {`$ ${
          price.discount === 0
            ? price.mainPrice
            : (price.mainPrice * price.discount) / 100
        }`}{" "}
        <span>{price.discount}%</span>
      </h4>
      <h4>{`$ ${price.discount != 0 ? price.mainPrice : ""}`}</h4>
    </div>
  );
};

export default Price;
