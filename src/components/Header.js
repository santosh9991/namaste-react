import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus()
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus? '✅':'🔴'}</li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>
            <li>Cart</li>
            <div className="filter">
          <div className="search">
              <input type='text' placeholder="Search"></input>
              <button className="serch-btn">Search</button>

          </div>
          </div>
            <button className="login" onClick={()=>{
              btnName === 'Login'?setBtnName('Logout'):setBtnName('Login')
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;