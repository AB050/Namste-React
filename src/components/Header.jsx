import { useState } from "react";
import { LOGO_URL } from "../Utilis/constant";

const Header = () => {
  const[btnNameReact,setbtnNameReact] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo_url"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
          btnNameReact==='Login'?setbtnNameReact("Logout"):setbtnNameReact("Login")
          }}>{btnNameReact}</button>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;
