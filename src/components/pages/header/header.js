import React from "react";
import "./header.css";
import LoginComponent from "./login";

function Header() {
  return (
    <div className="Header">
      <div>Header component, here will be some text and icon.</div>
      <LoginComponent />
      <div>Basket</div>
    </div>
  );
}

export default Header;
