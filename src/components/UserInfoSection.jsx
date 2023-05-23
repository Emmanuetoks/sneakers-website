/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import Cart from "../../public/images/icon-cart.svg";
import userImg from "../../public/images/image-avatar.png";
import countContext from "../context/itemCount";
import DeleteImg from "../../public/images/icon-delete.svg";
import { ItemContext } from "../context/itemContext";

const CartItems = ({ src, price, amount, name, setCartItems, cartItems }) => {
  const deleteItem = (e) => {
    const targetItem = e.target.getAttribute("target-item");
    setCartItems((prevValue) => {
      return prevValue.filter((item) => {
        if (item.name === targetItem) {
          return true;
        }
      });
    });
  };
  return (
    <div className="cart__items">
      <figure className="flex" style={{ alignItems: "center" }}>
        <src style={{ width: "2rem" }} src={src} />
        <figcaption>
          <h5 className="text-accent-300 fw-100 ">
            <span>{name}</span>
            <span>{`${price} ${amount} `}</span>
            <span className="text-accent-400 fw-300">{amount * price}</span>
          </h5>
        </figcaption>
        <button onClick={deleteItem} targte-item={name}>
          <img src={DeleteImg} />
        </button>
      </figure>
    </div>
  );
};

const UserCartInfo = () => {
  const [cartItems, setCartItems] = useContext(ItemContext);
  console.log(cartItems);
  return (
    <div className="cart pos-abs bg-white">
      <header className="cart__header text-accent-400 fw-200">Cart</header>
      {cartItems.map((item) => {
        return (
          <CartItems
            key={item.name}
            name={item.name}
            src={item.src}
            amount={item.amount}
            price={item.price}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        );
      })}
      <a href="#" className="text-accent-300 fw-200">
        <button className="cart__checkout-btn bg-orange text-accent-100">
          checkout
        </button>
      </a>
    </div>
  );
};

const UserInfoSection = () => {
  const [cartCount] = useContext(countContext);

  return (
    <div
      className="user user--info pos-rel flex ml-auto "
      style={{ "--gap": "2rem" }}
    >
      <div className="user__cart pos-rel" style={{ width: "1.5rem" }}>
        <img src={Cart} className="w-100" />
        <span className="user__cart-count pos-abs text-accent-100 bg-orange">
          {cartCount}
        </span>
      </div>
      <div className="user__img" style={{ width: "3rem" }}>
        <img src={userImg} className="w-100" />
      </div>
      <UserCartInfo />
    </div>
  );
};

export default UserInfoSection;
