import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState('Login')
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
            <li >Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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