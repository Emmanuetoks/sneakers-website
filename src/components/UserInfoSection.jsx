import { useContext } from "react";
import Cart from "../../public/images/icon-cart.svg";
import userImg from "../../public/images/image-avatar.png";
import countContext from "../context/itemCount";

const UserCartInfo = () => {
  <div className="user__cart-info"></div>;
};

const UserInfoSection = () => {
  const [cartCount, setCartCount] = useContext(countContext)

  return (
    <div className="user user--info flex ml-auto" style={{ "--gap": "2rem" }}>
      <div className="user__cart pos-rel" style={{ width: "1.5rem" }}>
        <img src={Cart} className="w-100" />
        <span className="cart-count pos-abs">{cartCount}</span>
      </div>
      <div className="user__img" style={{ width: "3rem" }}>
        <img src={userImg} className="w-100" />
      </div>
      <UserCartInfo />
    </div>
  );
};

export default UserInfoSection;
