/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import Cart from "../../public/images/icon-cart.svg";
import userImg from "../../public/images/image-avatar.png";
import countContext from "../context/itemCount";
import DeleteImg from "../../public/images/icon-delete.svg";
import { ItemContext } from "../context/itemContext";

const CartItem = ({ src, price, amount, name, setCartItems }) => {
  const [cartCount, setCartCount] = useContext(countContext);
  const deleteItem = (e) => {
    const targetItem = e.target.getAttribute("target-item");
    setCartItems((prevValue) => {
      return prevValue.filter((item) => {
        if (item.name === targetItem) {
          return true;
        }
      });
    });

    setCartCount(0)

  };
  return (
    <div className="cart__items" style={{'marginBlock': '1rem'}} >
      <figure className="flex" style={{ alignItems: "center"}} >
        <img style={{ width: "2rem" }} src={src} />
        <figcaption>
            <p className="text-accent-300 capitalize">{name}</p>
            <span className="text-accent-300">{`$${price}.00 x ${amount}  `}</span>
            <span className="text-accent-400 fw-300">{'$' + amount * price}</span>
        </figcaption>
        <button
          onClick={deleteItem}
          targte-item={name}
          style={{ cursor: "pointer" }}
        >
          <img src={DeleteImg} />
        </button>
      </figure>
    </div>
  );
};

const UserCartInfo = () => {
  const [cartItems, setCartItems] = useContext(ItemContext);
  return (
    <div className="cart pos-abs bg-white">
      <header className="cart__header text-accent-400 fw-200">Cart</header>
      {cartItems.length != 0 ?cartItems.map((item) => {
        return (
          <CartItem
            key={item.name}
            name={item.name}
            src={item.src}
            amount={item.amount}
            price={item.price}
            setCartItems={setCartItems}
          />
        );
      }) : <p className="text-accent-200 fw-200" style={{'textAlign':'center', 'marginBottom': '1em'}}>Your cart is empty</p> }
      {}
      <a href="#" className="text-accent-300 fw-200">
        <button className="cart__checkout-btn bg-orange text-accent-100 capitalize">
          checkout
        </button>
      </a>
    </div>
  );
};


const UserInfoSection = () => {
  const [cartCount] = useContext(countContext);
  const [showCart, setShowCart] = useState(false)

  const toggleShowCart = () => {
    if (showCart) {
      setShowCart(false)
    }else {
      setShowCart(true)
    }
  }
  return (
    <div
      className="user user--info pos-rel flex ml-auto "
      style={{ "--gap": "2rem" }}
    >
      <div className="user__cart pos-rel" style={{ width: "1.5rem" }}>
        <button onClick={toggleShowCart} style={{'cursor': 'pointer', 'backgroundColor': 'transparent'}}>
          <img src={Cart} className="w-100" />
        </button>
        <span className="user__cart-count pos-abs text-accent-100 bg-orange">
          {cartCount}
        </span>
      </div>
      <div className="user__img" style={{ width: "3rem" }}>
        <img src={userImg} className="w-100" />
      </div>
      {showCart ? <UserCartInfo />: ''}
    </div>
  );
};

export default UserInfoSection;
