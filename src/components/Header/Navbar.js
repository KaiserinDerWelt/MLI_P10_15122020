import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({ sticky }) => {
return (
  <nav className="navbar navbar-sticky">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo"/>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
    </ul>
  </nav>
)};
export default Navbar;
