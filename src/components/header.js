import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { isLoged } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.isLoged);

  return (
    <div className="Header">
      Header component, here will be some text and logo.
      <div>{loged ? <div>Welcome Mr.X</div> : <div>Not loged in</div>}</div>
      <button onClick={() => dispatch(isLoged())}>
        {loged ? <span>Logout</span> : <span>Login</span>}
      </button>
      <div>Basket</div>
    </div>
  );
}

export default Header;
