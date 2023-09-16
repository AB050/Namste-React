import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utilis/constant";
import { Link } from "react-router-dom";

const Header = () => {

  const[btnNameReact,setbtnNameReact] = useState("Login")

  useEffect(
    ()=>{
     console.log("useEffect Called ")
    },[]
  )

  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"}><img
          className="logo"
          src={LOGO_URL}
          alt="logo_url"
        /></Link>
        
      </div>
      <div className="nav-items">
        <ul>
        <Link to={"/"} className="remove">Home</Link>
        <Link to={"/about" } className="remove">About Us</Link>
        <Link to={"/contact"} className="remove">Contact Us</Link>
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
