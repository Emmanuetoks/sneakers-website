import Cart from "../../public/images/icon-cart.svg";
import countContext from "../context/itemCount";
import { useContext, useState } from "react";
import MinusBtn from "../../public/images/icon-minus.svg";
import PlusBtn from "../../public/images/icon-plus.svg";

const AddItem = () => {
  const [cartCount, setCartCount] = useContext(countContext);
  const [itemCount, setItemCount] = useState(0);

  const increaseItemCount = () => {
    setItemCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const reduceItemCount = () => {
    setItemCount((prevValue) => {
      if (itemCount != 0) {
        return prevValue - 1;
      } else {
        return 0
      }
    });
  };

  const addToCart = () => {
    setCartCount(itemCount);
    setItemCount(0)
  };

  return (
    <div className="add-item-box flex">
      <div className="item-counter flex bg-super-light-grey">
        <button onClick={reduceItemCount} className="add-btn">
          <img src={MinusBtn} />
        </button>

        <span className="text-accent-400 fw-200" >{itemCount}</span>

        <button className="sub-btn" onClick={increaseItemCount}>
          <img src={PlusBtn} />
        </button>
      </div>
      <button className="flex bg-orange add-to-cart flex" onClick={addToCart}>
        <div className="user__cart" style={{ width: "1rem" }}>
          <img src={Cart} className="w-100" />
        </div>
        <span className="text-accent-100 fw-200">Add to cart</span>
      </button>
    </div>
  );
};

export default AddItem;
