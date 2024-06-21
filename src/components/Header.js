import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus()
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
            <li className="px-4">Cart</li>
            {/* <div className="filter">
          <div className="search">
              <input type='text' placeholder="Search"></input>
              <button className="serch-btn">Search</button>

          </div>
          </div> */}
            <button className="login" onClick={()=>{
              btnName === 'Login'?setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;