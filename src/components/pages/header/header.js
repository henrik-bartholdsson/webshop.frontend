import React, { useContext } from "react";
import "./header.css";
import { AppContext } from '../../../appState/appState'
import LoginComponent from "./login";
import { Link } from "react-router-dom";
import MyOrders from '../myOrders';

function Header() {
  const [context] = useContext(AppContext);

  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <LoginComponent />
      <Link to={"/basket"} className={"BasketLink"}>Varukorg</Link>
      <div>{context.userLogedIn ? (<Link to={"/myorders"} className={"BasketLink"}>Mina ordrar</Link>) : (<div></div>)}</div>
    </div >
  );
}

export default Header;
