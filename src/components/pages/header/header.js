import React from "react";
import "./header.css";
import LoginComponent from "./login";
import { Link } from "react-router-dom";

function Header() {
  const loged = true;
  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <div style={{ float: "right" }}><LoginComponent /></div>

      <a className="BasketLink" href="/basket" hidden={!loged}>Basket</a>
    </div>
  );
}

export default Header;
