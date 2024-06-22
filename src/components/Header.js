import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // use selector will give access to our store
  const cartItems = useSelector((state)=>state.cart.items)
    return (
      <div className="flex justify-between bg-orange-100 shadow-lg">
        <div className="logo-container">
          <img
            className="w-56"
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg"
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status: {onlineStatus? '✅':'🔴'}</li>
            <li className="px-4"><Link to='/home'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart ({cartItems.length} items)</Link> </li>
            {/* <div className="filter">
          <div className="search">
              <input type='text' placeholder="Search"></input>
              <button className="serch-btn">Search</button>

          </div>
          </div> */}
            <button className="login" onClick={()=>{
              btnName === 'Login'?setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>

          </ul>
        </div>
      </div>
    );
  };

  export default Header;