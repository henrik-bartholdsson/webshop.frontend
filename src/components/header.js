import React from "react";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { isLoged, isNotLoged } from "../store/actions";

function Header() {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.isLoged);

  return (
    <div className="Header">
      Header component, here will be some text and logo.
      <button onClick={() => dispatch(isLoged())}>
        {loged ? <span>Logout</span> : <span>Login</span>}
      </button>
      <div>{loged ? <div>Yes</div> : <div>No</div>}</div>
    </div>
  );
}

export default Header;
