import { useContext } from "react";
import Cart from "../../public/images/icon-cart.svg";
import userImg from "../../public/images/image-avatar.png";
import countContext from "../context/itemCount";
import dummy from "../../public/images/image-product-1-thumbnail.jpg";
import DeleteImg from "../../public/images/icon-delete.svg";


const UserCartInfo = () => {
  return (
    <div className="cart pos-abs bg-white">
      <header className="cart__header text-accent-400 fw-200">Cart</header>
      <div className="cart__items">
        <figure className="flex" style={{'alignItems':'center'}}>
          <img style={{'width': '2rem'}} src={dummy} />
          <figcaption>
            <h5>
              <span className="text-accent-300 fw-100">jjkjk</span>
              <span>8hbhbbi</span>
            </h5>
          </figcaption>
        <img src={DeleteImg} />
        </figure>
      </div>
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
        <span className="user__cart-count pos-abs text-accent-100 bg-orange">{cartCount}</span>
      </div>
      <div className="user__img" style={{ width: "3rem" }}>
        <img src={userImg} className="w-100" />
      </div>
      <UserCartInfo />
    </div>
  );
};

export default UserInfoSection;
