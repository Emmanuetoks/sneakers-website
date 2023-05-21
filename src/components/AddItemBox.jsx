import Cart from "../../public/images/icon-cart.svg";

const AddItem = () => {
  return (
    <div className="add-item-box">
      <div className="item-counter">
        <button className="add-btn">
          <span>-</span>
        </button>
        <span>0</span>
        <button className="sub-btn">
          <span>+</span>
        </button>
      </div>
      <button className="flex">
        <div className="user__cart" style={{ width: "1rem" }}>
          <img src={Cart} className="w-100" />
        </div>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddItem;
