import Cart from "../../public/images/icon-cart.svg";
import countContext from "../context/itemCount";
import { useContext, useState } from "react";

const AddItem = () => {
  const [cartCount, setCartCount] = useContext(countContext)
  const [itemCount, setItemCount] = useState(0)

  const increaseItemCount = () => {
    setItemCount((prevValue) => {
      return prevValue + 1
    } )
  }

  const reduceItemCount = () => {
    setItemCount((prevValue) => {
      return prevValue - 1
    })
  }

  const addToCart = () => {
    setCartCount(itemCount)
    setItemCount(0)
  }

  return (
    <div className="add-item-box">
      <div className="item-counter">
        <button onClick={reduceItemCount} className="add-btn">
          <span>-</span>
        </button>

        <span>{itemCount}</span>

        <button className="sub-btn" onClick={increaseItemCount}>
          <span>+</span>
        </button>
        
      </div>
      <button className="flex" onClick={addToCart}>
        <div className="user__cart" style={{ width: "1rem" }}>
          <img src={Cart} className="w-100" />
        </div>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddItem;
