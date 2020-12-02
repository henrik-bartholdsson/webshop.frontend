import React from "react";
import "./header.css";
import LoginComponent from "./Login";
import { Link } from "react-router-dom";

function Header() {
  const loged = true;
  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <LoginComponent className="" />
      <a className="BasketLink" href="/basket" hidden={!loged}>Basket</a>
    </div>
  );
}

export default Header;
