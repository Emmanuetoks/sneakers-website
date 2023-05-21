import Cart from '../../public/images/icon-cart.svg'
import userImg from '../../public/images/image-avatar.png'


const UserCartInfo = () => {
    <div className="user__cart-info">
        
    </div>
};

const UserInfoSection = () => {
  return (
    <div className="user user--info flex ml-auto" style={{'--gap': '2rem'}}>
      <div className="user__cart" style={{'width': '1.5rem'}}>
        <img src={Cart} className='w-100'/>
      </div>
      <div className='user__img' style={{'width': '3rem'}}>
        <img src={userImg} className='w-100'/>
      </div>
      <UserCartInfo />
    </div>
  );
};

export default UserInfoSection;
