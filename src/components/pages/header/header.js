import React from "react";
import "./header.css";
import LoginComponent from "./login";
import { Link } from "react-router-dom";

function Header() {
  
  return (
    <div className="Header">
      <div className="HomeLink">
        <Link to={"/"}>Home</Link>
      </div>
      <div className="BasketLink">
        <Link to={"/basket"} className={"BasketLink"}>Varukorg</Link>
      </div>
      <div className="LoginComponent">
        <LoginComponent />
      </div>
    </div >
  );
}

export default Header;
