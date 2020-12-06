import React from "react";
import "./header.css";
import LoginComponent from "./login";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <LoginComponent />
      <Link to={"/basket"} className={"BasketLink"}>Varukorg</Link>
    </div >
  );
}

export default Header;
